import { useCallback, useEffect, useState } from "react"
import { ARABICTRANSLATION, PRAYER_METHODS } from "../data/consts"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useLanguage } from "../context/languageContext";

export default function PrayerTimes(){

    const API_KEY = process.env.REACT_APP_ISLAMIC_API_KEY

    const [prayerData, setPrayerData] = useState(null)
    const [selectedMethod, setSelectedMethod] = useState(21)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const {language} = useLanguage();

    const handleTranslation = (key) => {
        if(language === 'ar'){
            return ARABICTRANSLATION[key] 
        }
        return key
    }

    const handleDateTranslation = () => {
        if(language === 'ar'){
            return <span>{prayerData.data.date.hijri.weekday.ar} {prayerData.data.date.hijri.day} {prayerData.data.date.hijri.month.ar} {prayerData.data.date.hijri.year}</span>
        }
        return <span>{prayerData.data.date.readable} / {prayerData.data.date.hijri.day} {prayerData.data.date.hijri.month.en} {prayerData.data.date.hijri.year}</span>
    }

    const handleWeekdayTranslation = () => {
        if(language === 'ar'){
            return prayerData.data.date.hijri.weekday.ar
        }
        return prayerData.data.date.gregorian.weekday.en.substr(0, 3).toUpperCase()
    }

    const handleDirectionTranslation = (direction) => {
        if(language === 'ar'){
            switch(direction){
                case 'South' : return 'الجنوب'
                case 'East' : return 'الشرق'
                case 'West' : return 'الغرب'
                default : return 'الشمال'
            }
        }
        return direction
    }

    const handleMonthTranslation = () => {
        if(language === 'ar'){
            return prayerData.data.date.hijri.month.ar
        }
        return prayerData.data.date.hijri.month.en
    }

    const getCurrentLocation = useCallback(() => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation not supported'));
                return;
            }

            navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                });
            },
            (error) => reject(error.message || error)
            );
        });
    }, [])

    const fetchPrayerTimes = useCallback(async (latitude, longitude) => {
        setPrayerData(null)
        setError(null)
        try {
            const res = await fetch(`https://islamicapi.com/api/v1/prayer-time/?lat=${latitude}&lon=${longitude}&method=${selectedMethod}&school=1&api_key=${API_KEY}`)
            if(!res.ok) throw new Error(`HTTP ${res.status}`)
            const data = await res.json()
            if(data.status === 'success') setPrayerData(data)
            else setError(new Error(data.message || 'API error'))
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [API_KEY, selectedMethod])

    useEffect(() => {
    (async () => {
        try {
            setIsLoading(true)
            const { latitude, longitude } = await getCurrentLocation();
            fetchPrayerTimes(latitude, longitude);
        } catch(error){
            setError(error)
        }
    })();
    }, [fetchPrayerTimes, getCurrentLocation]);

    const handleMethodChange = e => {
        setSelectedMethod(parseInt(e.target.value))
    }

    return(
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="relative w-full text-slate-200 p-4">
            {
                isLoading
                &&
                <div className="absolute inset-x-0 top-0 h-screen md:inset-0 md:h-[calc(100vh-88px)] z-50 flex items-center justify-center gap-4">
                    <div className="dot-spinner">
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                    </div>
                    <h2 className="text-slate-200">{handleTranslation('Please wait')}</h2>
                </div>
            }
            {
                prayerData?.status === 'success' 
                &&
                <div className="w-full grid grid-cols-1 md:grid-cols-[48%_25%_25%] gap-2 mt-5">
                    <div className="col-span-3 my-3">
                        <span className="font-thin">{handleTranslation('Prayer Times in')}</span>
                        <h1 className="my-1">{prayerData.data.timezone.name}</h1>
                    </div>
                    <div className="bg-slate-600/40 col-span-3 md:col-span-2 p-3 rounded-md">
                        <FormControl
                            variant="standard"
                            sx={{ m: 1, minWidth: 120, width: '100%' }}   
                            >
                            <Select
                                labelId="demo-simple-select-standard-label"
                                value={selectedMethod}
                                onChange={handleMethodChange}
                                sx={{
                                color: '#fff',
                                fontFamily: '"Rubik", sans-serif',

                                direction: language === 'ar' ? 'rtl' : 'ltr',
                                textAlign: language === 'ar' ? 'right' : 'left',
                                '& .MuiSelect-icon': {
                                    color: '#fff', 
                                    right: language === 'ar' ? 'auto' : 0,
                                    left: language === 'ar' ? 0 : 'auto',
                                },
                                '&:before': {
                                    borderBottomColor: 'oklch(27.9% 0.041 260.031)',
                                },
                                '&:after': {
                                    borderBottomColor: 'oklch(27.9% 0.041 260.031)',
                                },
                                '&:hover': {
                                    borderBottomColor: 'oklch(55.4% 0.046 257.417)',
                                }
                                }}

                                MenuProps={{
                                PaperProps: {
                                    sx: {
                                    fontFamily: '"Rubik", sans-serif',
                                    backgroundColor: '#121212',
                                    color: '#fff',
                                    direction: language === 'ar' ? 'rtl' : 'ltr',
                                    textAlign: language === 'ar' ? 'right' : 'left',
                                    },
                                },
                                }}
                            >
                                {PRAYER_METHODS.map((method) => (
                                <MenuItem
                                    key={method.id}
                                    value={method.id}
                                    sx={{
                                    fontFamily: '"Rubik", sans-serif',
                                    direction: language === 'ar' ? 'rtl' : 'ltr',
                                    textAlign: language === 'ar' ? 'right' : 'left',
                                    '&:hover': {
                                        backgroundColor: 'oklch(55.4% 0.046 257.417)',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: 'oklch(55.4% 0.046 257.417)',
                                    },
                                    '&.Mui-selected:hover': {
                                        backgroundColor: 'oklch(55.4% 0.046 257.417)',
                                    },
                                    }}
                                >
                                    {language === 'ar' ? method.labelAr : method.label}
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="bg-slate-600/40 row-span-2 col-span-3 md:col-span-1 p-4 flex flex-col justify-center rounded-md text-center">
                        <h2 className="font-bold text-xlg">{handleWeekdayTranslation()}</h2>
                        <hr />
                        <h4 className="font-thin text-lg">{handleMonthTranslation()}</h4>
                    </div>
                    <div className="bg-slate-600/40 col-span-3 md:col-span-2 p-3 flex flex-col items-center justify-center rounded-md">
                        <h3 className="flex items-center text-lg md:text-2xl gap-3"><img src="/assets/icons/world.svg" alt="World map" className="w-6 h-6 md:w-8 md:h-8" /> {prayerData.data.timezone.name} {prayerData.data.timezone.utc_offset} {prayerData.data.timezone.abbreviation}</h3>
                        <h3 className="font-thin text-sm md:text-lg flex items-center gap-2"><img src="/assets/icons/calendar.svg" alt="World map" className="w-5 h-5" />{handleDateTranslation()}</h3>
                    </div>
                    <div className="bg-slate-600/40 col-span-3 grid grid-cols-3 md:flex justify-around items-center p-3 rounded-md">
                        <div className="flex flex-col justify-center items-center p-3">
                            <img src="assets/icons/sunrise.png" alt="Fajr prayer" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                            <p className="font-bold">{handleTranslation('Fajr')}</p>
                            <p className="font-thin text-lg">{prayerData.data.times.Fajr || '--:--'}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-3">
                            <img src="/assets/icons/sun_dhuhr.svg" alt="Dhuhr prayer" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                            <p className="font-bold">{handleTranslation('Dhuhr')}</p>
                            <p className="font-thin text-lg">{prayerData.data.times.Dhuhr || '--:--'}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-3">
                            <img src="/assets/icons/sun_asr.svg" alt="Asr prayer" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                            <p className="font-bold">{handleTranslation('Asr')}</p>
                            <p className="font-thin text-lg">{prayerData.data.times.Asr || '--:--'}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-3">
                            <img src="assets/icons/sunset.png" alt="Maghrib prayer" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                            <p className="font-bold">{handleTranslation('Maghrib')}</p>
                            <p className="font-thin text-lg">{prayerData.data.times.Maghrib || '--:--'}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-3">
                            <img src="/assets/icons/isha.svg" alt="Isha prayer" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                            <p className="font-bold">{handleTranslation('Isha')}</p>
                            <p className="font-thin text-lg">{prayerData.data.times.Isha || '--:--'}</p>
                        </div>
                    </div>
                    <div className="bg-slate-600/40 col-span-3 md:col-span-1 p-3 flex flex-col justify-around gap-3 md:gap-0 rounded-md">
                        <div className="flex items-center justify-around">
                            <span className="text-base md:text-lg">{handleTranslation('Sunrise')}</span>
                            <span className="font-thin text-lg">{prayerData.data.times.Sunrise}</span>
                        </div>
                        <div className="flex items-center justify-around">
                            <span className="text-base md:text-lg">{handleTranslation('Sunset')}</span>
                            <span className="font-thin text-lg">{prayerData.data.times.Sunset}</span>
                        </div>
                    </div>
                    <div className="bg-slate-600/40 row-span-2 col-span-3 md:col-span-2 flex flex-col justify-around p-3 rounded-md">
                        <h3 className="flex items-center gap-2">{handleTranslation('Prohibited Times')} <img src="/assets/icons/prohibition.svg" alt="Prohibition" className="w-6 h-6 md:w-8 md:h-8" /></h3>
                        <h5 className="text-base md:text-lg font-light">{handleTranslation('Sunrise')}</h5>
                        <div className="flex justify-around items-center bg-slate-300/70 rounded-md text-slate-800 p-2 my-1">
                            <span className="font-bold">{handleTranslation('Start')} - {prayerData.data.prohibited_times.sunrise.start}</span>
                            <span className="font-bold">{handleTranslation('End')} - {prayerData.data.prohibited_times.sunrise.end}</span>
                        </div>
                        <h5 className="text-base md:text-lg font-light mt-3">{handleTranslation('Noon')}</h5>
                        <div className="flex justify-around items-center bg-slate-300/70 rounded-md text-slate-800 p-2 my-1">
                            <span className="font-bold">{handleTranslation('Start')} - {prayerData.data.prohibited_times.noon.start}</span>
                            <span className="font-bold">{handleTranslation('End')} - {prayerData.data.prohibited_times.noon.end}</span>
                        </div>
                        <h5 className="text-base md:text-lg font-light mt-3">{handleTranslation('Sunset')}</h5>
                        <div className="flex justify-around items-center bg-slate-300/70 rounded-md text-slate-800 p-2 my-1">
                            <span className="font-bold">{handleTranslation('Start')} - {prayerData.data.prohibited_times.sunset.start}</span>
                            <span className="font-bold">{handleTranslation('End')} - {prayerData.data.prohibited_times.sunset.end}</span>
                        </div>
                    </div>
                    
                    <div className="bg-slate-600/40 col-span-3 md:col-span-1 p-3 flex flex-col justify-evenly rounded-md">
                        <div className="flex justify-around items-center bg-slate-300/70 rounded-md text-slate-800 p-2 my-2">
                            <img src="/assets/icons/compass.svg" alt="Compass" className="w-8 h-8" />
                            <span><b>{prayerData.data.qibla.direction.degrees}°</b> {handleTranslation('From')} {handleDirectionTranslation(prayerData.data.qibla.direction.from)}</span>
                        </div>
                        <div className="flex justify-around items-center bg-slate-300/70 rounded-md text-slate-800 p-2 my-3">
                            <img src="/assets/icons/kaaba.svg" alt="Kaaba" className="w-6 h-6" />
                            <span><b>{prayerData.data.qibla.distance.value} {prayerData.data.qibla.distance.unit}</b> {handleTranslation('From Kaaba')}</span>
                        </div>
                    </div>
                </div>
            }
            {
                error !== null 
                &&
                <div className="absolute inset-x-0 top-0 h-52 md:inset-0 md:h-[calc(100vh-88px)] z-50 flex items-center justify-center w-1/2 mx-auto gap-4">
                    <img src="./assets/icons/warning.svg" alt="Warning" className="w-10 h-10"/>
                    <h2 className="text-slate-200 mt-1">{error?.message}</h2>
                </div>
            }
        </div>
    )
}