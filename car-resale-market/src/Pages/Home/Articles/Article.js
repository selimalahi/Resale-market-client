import React from "react";
// import articleimg1 form'../../../assets/image/Articles/Article1.jpeg';
// import '../../../assets/image/Articles/Article12.jpg';
// import '../../../assets/image/Articles/Article3.jpg';
import articleimg1 from'../../../assets/image/Articles/Article1.jpeg';
import articleimg2 from'../../../assets/image/Articles/Article12.jpg';
import articleimg3 from'../../../assets/image/Articles/Article3.jpg';
import ArticleCard from "./ArticleCard";


const Article = () => {
  
    const AtriclesData = [
        {
            id: 1,
            img: articleimg2,
            name: 'Best Cars In Bangladesh Under 15 Lakhs',
            description:'Bangladesh is becoming an example of rapid economic growth in the world. With this growth, life is getting more challenging in Bangladesh. To deal with the challenges, the demand for good cars is getting higher day by day. But finding a good car that suits your budget can be a bigger challenge',

        },
        {
            id: 2,
            img: articleimg3,
            name: 'Best Cars in Bangladesh Under 1000cc',
            description:'Engine capacity determines the power and fuel efficiency of a car. Who doesn’t want a smooth ride on an empty road or highway? Cars with 1000cc or more engine capacity, have more power and lesser fuel efficiency. But if you have a tight budget, you should go for a car under 1000cc engine capacity. And that’s why bhalogari.com brings you the best cars in Bangladesh under 1000cc.',

        },
        {
            id: 3,
            img: articleimg1,
            name: 'Benefits Of Buying A Used Car',
            description:'When you buy a new car, there is a nice feeling. But this car buying process requires some important decisions, and whether to buy a new car or a used car, is one of the most important ones. If buying a used car feels like the lesser of the two options, you can think again and look for the benefits of buying a used car. These benefits are often overlooked by the buyers looking for a new car, but you don’t want to be one of them. To help you to see why a used car can be your first choice, here are some benefits of buying a used car:',

        },
    ]

  return (
    <div className="mt-16">
        <div className="text-2xl font-extrabold ml-5 text-center">
           <h2>Featured <span className="text-red-600">Articles</span></h2>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
           {
            AtriclesData.map(datas => <ArticleCard
                key={datas.id}
                datas={datas}
            ></ArticleCard>)
           }
        </div>
    </div>
  );
};

export default Article;
