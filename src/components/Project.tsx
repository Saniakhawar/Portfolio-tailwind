import React from 'react'
import Heading from '@/components/Heading'
import Card from '@/components/Card'

const data=[
    {
        id: 0,
        title: 'Dynamic Blog',
        desc: 'A dynamic blog built with Next.js and Tailwind CSS that offers seamless content management and a responsive user interface.',
        img: '/dynamic.jpg',
        tags: ['Next.js', 'Tailwind CSS', 'React']
    },
    
    {
        id:1,
        title:'Countdown Timer',
        desc:'A countdown timer,created using Next.JS and Tailwind CSS',
        img:'/timer.png',
        tags:['Next.JS','Tailwind',]

    },
    {
        id:2,
        title:'Ecommerce Web',
        desc: 'A website created using a figma template',
        img:'/figma.png',
        tags:['Next.JS','Tailwind']
    },
    {
        id: 3,
        title: 'Web Template',
        desc: 'A shopping website built with Next.js that offers a modern, responsive design and seamless user experience.',
        img: '/project.jpg',
        tags: ['Next.js', 'E-commerce', 'Responsive']
    },
    {
     id:4,
     title:'Watch Website',
     desc:'A website created using Custom CSS',
     img:'/project2.jpg',
     tags:['Next.JS','Custom Css']
    },
    {
        id: 5,
        title: 'Weather Widget',
        desc: 'A dynamic weather widget built with Next.js and Custom CSS that leverages a weather API to display real-time weather information.',
        img: '/project3.jpg',
        tags: ['Next.js', 'Custom CSS', 'API']
    }
    
    

]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32 '>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el)=>(<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            
            />))}

        </div>
      
    </div>
  )
}

export default Projects