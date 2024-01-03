import React, { useContext } from 'react'
import SectionSmallHeader from '../../GloballComponents/SectionSmallHeader'
import { MapContainer, TileLayer } from 'react-leaflet';
import ChartTopRegions from './ChartTopRegions';
import MapTopRegions from './MapTopRegions';
import CustomizeContext from '../../../context/costomizeContext';
import PersionMapTopRegion from './PersionMapTopRegion';

export default function TopRegions() {
    const { language } = useContext(CustomizeContext)
    const isLanguageFa = language === "fa"

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 xl:h-[560px] xl:overflow-hidden bg-slate-100 dark:bg-slate-950 border-t border-solid border-gray-400 dark:border-slate-600'>
            <div className="p-6 lg:p-8">
                <div className="pb-8">
                    <SectionSmallHeader title={{ en: "Top regions by revenue", fa: "مناطق برتر از نظر درآمد" }} subtitle={{ en: 'Where you generated most of the revenue', fa: "جایی که بیشترین درآمد را کسب کردید." }} />
                </div>

                <div className="">
                    <ChartTopRegions />
                </div>
            </div>
            <div className="overflow-hidden h-[300px] xlg:h-full">
                { isLanguageFa ? <PersionMapTopRegion /> : <MapTopRegions /> }
            </div>
        </div>
    )
}
