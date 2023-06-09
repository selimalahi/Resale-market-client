import React from 'react';
import img1 from '../../../assets/upcomming/q1.png';
import img2 from '../../../assets/upcomming/q2.png';
import img3 from '../../../assets/upcomming/q3.png';
import img4 from '../../../assets/upcomming/q4.png';
import img5 from '../../../assets/upcomming/q5.png';
import img6 from '../../../assets/upcomming/q6.png';
import UpcommingCard from './UpcommingCard';

// import { RiScalesFill, BsSpeedometer, TbEngine,BsFuelPumpDieselFill, GiGearStickPattern  } from 'react-icons/fa';

const Upcomming = () => {

    const carddatas = [
        {
            id:1,
            img:img1,
            // icon1:RiScalesFill,
            condition: 'New',
            name:'Lincoln MKT 2014',
            type:'Crossovers, Pickups-Trucks 2014',
            sale:'For Sale or Rent 120000/500$',
            // icon2: BsSpeedometer, TbEngine, BsFuelPumpDieselFill, GiGearStickPattern ,
            meterinfo1:'22K mi',
            meterinfo2:'3 L EOS+',
            meterinfo3:'Diesel',
            meterinfo4:'Auto',
            conpany:'City: ChicagoAgent Mike Newtone',
            post:'Added: 24.03.17',
            description:'Donec facilisis lectus id risus sodales, eu lobortis odio ullamcorper. Aliquam faucibus hendrerit varius. Aenean iaculis sem urna, non sodales mi facilisis vel. Sed vel libero et eros aliquam dictum. Pellentesque dapibus tortor vel malesuada blandit. Nulla facilisi. Cras cursus posuere sagittis. Pellentesque scelerisque porttitor fringilla. Proin id metus ullamcorper, dignissim turpis vitae, pulvinar ex. Donec lacinia viverra tortor quis ultrices. Sed a diam eu felis fermentum vestibulum vitae eget libero. Integer ullamcorper at justo et gravida.Pellentesque sit amet aliquet nunc, id ullamcorper odio. Donec dictum, purus eget posuere volutpat, neque diam porttitor risus, vel malesuada eros elit sed arcu. Maecenas non varius mi. Aliquam orci velit, bibendum eu finibus in, imperdiet in orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tincidunt magna a nulla consectetur dictum. Praesent at quam ac ligula ornare consequat in eu dui. Mauris dapibus justo ac augue pellentesque, ut tristique purus commodo. Ut et scelerisque ex, vel feugiat enim. Nulla maximus non sem non ultricies. Nulla vitae orci et enim laoreet faucibus in a mi. Praesent eget luctus arcu, nec tempus sem. Vestibulum cursus ipsum nisl. Aliquam non ex est.',
          details:{
            carid:"limkt-0092",
            Maker: " Lincoln",
            model:'',
            Transmission:" Auto",
            Typeofdrive:" Rear-wheel",
             driveFuel: "Diesel",
             Engine: '3.6 L EOS+Engine',
              power: 450, 
              horsesEnginepower: '280 watts',
          },
          feature:{
            feature1:'Air conditioning',
            feature2:'Electro-lifts of glasses',
            feature3:' GPS NavigatorHead',
            feature4:'unitHeated seatsLeather',
            feature5:'casesWinter tires',
              
          },      
    

        },
        {
            id:2,
            img:img2,
            // icon1:RiScalesFill,
            condition: 'New',
            name:'KIA Optima 2015',
            type:'Sedans 2015',
            sale:'For sale 7900$',
            // icon2:BsSpeedometer, TbEngine, BsFuelPumpDieselFill, GiGearStickPattern ,
            meterinfo1:'15K k',
            meterinfo2:'3 L EOS+',
            meterinfo3:'Diesel',
            meterinfo4:'Auto',
            conpany:'City: MaiamiAgent Ted Lacky',
            post:'Added: 24.03.17',
            description:'Aliquam faucibus hendrerit varius. Aenean iaculis sem urna, non sodales mi facilisis vel. Sed vel libero et eros aliquam dictum. Pellentesque dapibus tortor vel malesuada blandit. Nulla facilisi. Cras cursus posuere sagittis. Pellentesque scelerisque porttitor fringilla. Proin id metus ullamcorper, dignissim turpis vitae, pulvinar ex. Donec lacinia viverra tortor quis ultrices. Sed a diam eu felis fermentum vestibulum vitae eget libero. Integer ullamcorper at justo et gravida.Pellentesque sit amet aliquet nunc, id ullamcorper odio. Donec dictum, purus eget posuere volutpat, neque diam porttitor risus, vel malesuada eros elit sed arcu. Maecenas non varius mi. Aliquam orci velit, bibendum eu finibus in, imperdiet in orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tincidunt magna a nulla consectetur dictum. Praesent at quam ac ligula ornare consequat in eu dui. Mauris dapibus justo ac augue pellentesque, ut tristique purus commodo. Ut et scelerisque ex, vel feugiat enim. Nulla maximus non sem non ultricies. Nulla vitae orci et enim laoreet faucibus in a mi. Praesent eget luctus arcu, nec tempus sem. Vestibulum cursus ipsum nisl. Aliquam non ex est.',
          details:{
            carid:"limkt-0092",
            Maker: " Lincoln",
            model:'',
            Transmission:" Auto",
            Typeofdrive:" Rear-wheel",
             driveFuel: "Diesel",
             Engine: '3.6 L EOS+Engine',
              power: 450, 
              horsesEnginepower: '280 watts',
          },
          feature:{
            feature1:'Air conditioning',
            feature2:'Electro-lifts of glasses',
            feature3:' GPS NavigatorHead',
            feature4:'unitHeated seatsLeather',
            feature5:'casesWinter tires',
              
          },      

        },
        {
            id:3,
            img:img3,
            // icon1:[RiScalesFill],
            condition: 'sale',
            name:'Mazda 3 2015',
            type:'Coupes 2015',
            sale:'For rent 100$ per day',
            // icon2:BsSpeedometer, TbEngine, BsFuelPumpDieselFill, GiGearStickPattern ,
            meterinfo1:'42 k K ',
            meterinfo2:'1,8 L EOS+',
            meterinfo3:'Diesel',
            meterinfo4:'Auto',
            conpany:'City: New YorkOwner Martin Moore',
            post:'Added: 24.03.17',
            escription:'Aliquam placerat ante ipsum. Proin congue orci eget erat auctor, vitae elementum diam sodales. Nulla semper eu purus vel tincidunt. Duis lobortis orci quis venenatis aliquet. Ut feugiat tincidunt orci, et cursus tortor hendrerit ut. Sed ac risus tortor. Suspendisse ac metus et felis feugiat imperdiet nec non ipsum. Quisque laoreet nulla nec mauris euismod semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Donec facilisis lectus id risus sodales, eu lobortis odio ullamcorper. Aliquam faucibus hendrerit varius. Aenean iaculis sem urna, non sodales mi facilisis vel. Sed vel libero et eros aliquam dictum. Pellentesque dapibus tortor vel malesuada blandit. Nulla facilisi. Cras cursus posuere sagittis. Pellentesque scelerisque porttitor fringilla. Proin id metus ullamcorper, dignissim turpis vitae, pulvinar ex. Donec lacinia viverra tortor quis ultrices. Sed a diam eu felis fermentum vestibulum vitae eget libero. Integer ullamcorper at justo et gravida.',
          details:{
            carid:" mazda-0082",
            Maker: " Mazda",
            model:'',
            Transmission:"Mechanics",
            Typeofdrive:"Front-wheel drive",
             driveFuel: "Diesel",
             Engine: '3.6 L EOS+Engine',
             power: 450, 
             horsesEnginepower: '280 watts',
          },
          feature:{
            feature1:'Air conditioning',
            feature2:'Electro-lifts of glasses',
            feature3:' GPS NavigatorHead',
            feature4:'unitHeated seatsLeather',
            feature5:'casesWinter tires',
              
          },             

        },
        {
            id:4,
            img:img4,
            // icon1:RiScalesFill,
            condition: 'New',
            name:'Lexus NX Hybrid 2014',
            type:'Crossovers, SUVs 2014',
            sale:'For rent 200$ per week',
            // icon2:BsSpeedometer, TbEngine, BsFuelPumpDieselFill, GiGearStickPattern,
            meterinfo1:'40 K',
            meterinfo2:'3 L EOS+',
            meterinfo3:'Diesel',
            meterinfo4:'Auto',
            conpany:'City: ChicagoAgent Mike Newtone',
            post:'Added: 24.03.17',
            escription:'Fusce pellentesque sodales lacus, at tincidunt ante sagittis a. Praesent convallis tristique tortor. Nunc blandit dignissim dolor sed venenatis. Aliquam id feugiat nisl. Aliquam placerat ante ipsum. Proin congue orci eget erat auctor, vitae elementum diam sodales. Nulla semper eu purus vel tincidunt. Duis lobortis orci quis venenatis aliquet. Ut feugiat tincidunt orci, et cursus tortor hendrerit ut. Sed ac risus tortor. Suspendisse ac metus et felis feugiat imperdiet nec non ipsum. Quisque laoreet nulla nec mauris euismod semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  Donec facilisis lectus id risus sodales, eu lobortis odio ullamcorper. Aliquam faucibus hendrerit varius. Aenean iaculis sem urna, non sodales mi facilisis vel. Sed vel libero et eros aliquam dictum. Pellentesque dapibus tortor vel malesuada blandit. Nulla facilisi. Cras cursus posuere sagittis. Pellentesque scelerisque porttitor fringilla. Proin id metus ullamcorper, dignissim turpis vitae, pulvinar ex. Donec lacinia viverra tortor quis ultrices. Sed a diam eu felis fermentum vestibulum vitae eget libero. Integer ullamcorper at justo et gravida.',
          details:{
            carid:"nx-0078",
            Maker: "Lexus",
            model:'',
            Transmission:"Mechanics",
            Typeofdrive:" All-wheel drive",
             driveFuel: "Diesel",
             Engine: '3.6 L EOS+Engine',
             power: '280 horses', 
             horsesEnginepower: '280 watts',
          },
          feature:{
            feature1:'Air conditioning',
            feature2:'Electro-lifts of glasses',
            feature3:' GPS NavigatorHead',
            feature4:'unitHeated seatsLeather',
            feature5:'casesWinter tires',
              
          },             


        },
        {
            id:5,
            img:img5,
            // icon1:[RiScalesFill],
            condition: 'New',
            name:'BMW 6 Series 2014',
            type:'Convertibles, Coupes 2014',
            sale:'For sale 50000$',
            // icon2:BsSpeedometer, TbEngine, BsFuelPumpDieselFill, GiGearStickPattern ,
            meterinfo1:'0 km',
            meterinfo2:'3.6 L EOS+',
            meterinfo3:'Diesel',
            meterinfo4:'Auto',
            conpany:'City: MaiamiAuthor admin',
            post:'Added: 24.03.17',
            description:'Curabitur hendrerit, nulla ac maximus ullamcorper, eros ligula placerat lacus, sed congue metus lectus et neque. Fusce pellentesque sodales lacus, at tincidunt ante sagittis a. Praesent convallis tristique tortor. Nunc blandit dignissim dolor sed venenatis. Aliquam id feugiat nisl. Aliquam placerat ante ipsum. Proin congue orci eget erat auctor, vitae elementum diam sodales. Nulla semper eu purus vel tincidunt. Duis lobortis orci quis venenatis aliquet. Ut feugiat tincidunt orci, et cursus tortor hendrerit ut. Sed ac risus tortor. Suspendisse ac metus et felis feugiat imperdiet nec non ipsum. Quisque laoreet nulla nec mauris euismod semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Donec facilisis lectus id risus sodales, eu lobortis odio ullamcorper. Aliquam faucibus hendrerit varius. Aenean iaculis sem urna, non sodales mi facilisis vel. Sed vel libero et eros aliquam dictum. Pellentesque dapibus tortor vel malesuada blandit. Nulla facilisi. Cras cursus posuere sagittis. Pellentesque scelerisque porttitor fringilla. Proin id metus ullamcorper, dignissim turpis vitae, pulvinar ex. Donec lacinia viverra tortor quis ultrices. Sed a diam eu felis fermentum vestibulum vitae eget libero. Integer ullamcorper at justo et gravida.',
          details:{
            carid:"bmw-0070",
            Maker: "BMW",
            model:'',
            Transmission:" Auto",
            Typeofdrive:" Rear-wheel",
             driveFuel: "Diesel",
             Engine: '3.6 L EOS+Engine',
              power: 450, 
              horsesEnginepower: '280 watts',
          },
          feature:{
            feature1:'Air conditioning',
            feature2:'Electro-lifts of glasses',
            feature3:' GPS NavigatorHead',
            feature4:'unitHeated seatsLeather',
            feature5:'casesWinter tires',
              
          }      

        },
        {
            id:6,
            img:img6,
            // icon1:RiScalesFill,
            condition: 'sale',
            name:'Hyundai Accent GS 2015',
            type:'Green-cars 2015',
            sale:'For sale7/100$',
            // icon2: BsSpeedometer, TbEngine, BsFuelPumpDieselFill, GiGearStickPattern ,
            meterinfo1:'14 K',
            meterinfo2:'1.6 L TSC',
            meterinfo3:'Diesel',
            meterinfo4:'Auto',
            conpany:'City: Los AngelesAgent Ted Lacky',
            post:'Added: 24.03.17',
            description:'Donec ultricies urna et laoreet commodo. Quisque condimentum ex sit amet risus elementum, eu tempus sapien mattis. Vestibulum sit amet erat aliquet, cursus dolor ut, scelerisque eros. Mauris id rutrum lectus. Aenean gravida ante non gravida condimentum. Suspendisse ut nisl nec libero rutrum feugiat. In vel tempor lorem. Vestibulum aliquam sagittis volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Cras varius, ante id dapibus pharetra, nibh magna egestas justo, nec vehicula sem est eu metus. Curabitur faucibus magna quis neque rutrum, sed malesuada odio bibendum. Morbi non commodo erat, vel porttitor mauris. Morbi a nisi nec velit dapibus efficitur cursus ac mi. Aliquam placerat, metus eu ultricies commodo, libero arcu tincidunt libero, eget lacinia nulla diam id massa. Sed hendrerit egestas libero ut blandit. Donec porta commodo diam, et dapibus lacus luctus at. Donec tempus quis lorem non lacinia.',
            details:{
              carid:"accent-0062",
              Maker: "Hyundai",
              model:'',
              Transmission:" Auto",
              Typeofdrive:"Auto wheel",
               driveFuel: "Diesel",
               Engine: '3.6 L EOS+Engine',
                power:"100 horses", 
                horsesEnginepower: '280 watts',
            },
            feature:{
              feature1:'Air conditioning',
              feature2:'Electro-lifts of glasses',
              feature3:' GPS NavigatorHead',
              feature4:'unitHeated seatsLeather',
              feature5:'casesWinter tires',
                
            }      

        },
    ]
    return (
        <div className='mt-12 '> 
            <div>
                <h1 className='text-center text-4xl'>Upcomming <span className='text-[#5DC302]'>New</span> And <span className='text-[#5DC302]' >Used</span> Arrival</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid gap-8 mt-12'>
                {
                    carddatas.map(carddata =><UpcommingCard
                    key={carddata.id}
                    carddata = {carddata}

                    ></UpcommingCard>)
                }
            </div>
        </div>
    );
};

export default Upcomming;