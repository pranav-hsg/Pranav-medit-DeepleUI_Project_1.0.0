import { Injectable } from '@angular/core';
import { sectionBgVideoI, featuredCoursesI, parentSlideDataI, studentSlideDataI } from './section-data';

@Injectable({
  providedIn: 'root'
})
export class DataPopulateService {

  featuredCourses: featuredCoursesI[] =[
    {
      h1:'Python',
      p:'Python is an interpreted, high-level and general-purpose programming language. Created by Guido van Rossum and first released in 1991.'
    },
    {
      h1:'JavaScript',
      p:'JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.'
    },
    {
      h1:'C',
      p:'C programming is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie at the Bell Telephone Laboratories to develop the UNIX operating system. '
    },
    {
      h1:'R',
      p:`
      R is a language and environment for statistical computing and graphics. It is a GNU project which is similar to the S language and environment which was developed at Bell Laboratories by John Chambers and colleagues. R can be considered as a different implementation of S.`
    },
    {
      h1:'C++',
      p:' C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory.'
    },
    {
      h1:'Angular',
      p:' Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.'
    },
    {
      h1:'Ruby ',
      p:' Ruby is... A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write'
    },
    {
      h1:'SQL',
      p:'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS)'
    }
    ]

    parentSlideData:parentSlideDataI[]=[
      {
        name:'JOHN PA',
        origin:'New York',
        desc:'It is really easy, and nice to navigate. ...From an artistic standpoint, these stories are rather laboured productions, besides being ultra-romantic in tone; but it must be remembered that they were written mainly with an educational object, and, moreover, they deserve high praise for their style.',
        imgSrc:'assets/image/parent/par1.jpg'
      },
      {
       name:'ROBERT COSI',
       origin:'Florida',
       desc:'you are doing a great job, and up to date with technology.Chesterfield apparently took no further interest in the enterprise, and the book was about to appear, when he wrote two papers in the World in praise of it.',
       imgSrc:'assets/image/parent/par2.jpg'
     },
     {
       name:'MICHAEL MO',
       origin:'Texas',
       desc:'Very convenient, even if someone is not very computer literate.In the first case prayer will be accompanied with disinterested homage, praise and thankgiving, and will in fact tend to lose its distinctive character of entreaty or petition, passing into a mystic communing or converse with God.',
       imgSrc:'assets/image/parent/par3.jpg'
     },
     {
       name:'WILLIAM BLEND',
       origin:'Washington',
       desc:'I think the website is GREAT! It is easy to follow along and definitely convienent because you can pull the information up whenever you need toThe ideas are also found both in the New Testament and in early Christian literature: "Let us offer up a sacrifice of praise to God continually, that is, the fruit of lips which make confession to His name"',
       imgSrc:'assets/image/parent/par4.jpg'
     }
  ]
  studentSlideData: studentSlideDataI[]=[
    {
      name:'OLIVIA',
      origin:'Washington',
      desc:'I think the website is GREAT! It is easy to follow along and definitely convienent because you can pull the information up whenever you need toThe ideas are also found both in the New Testament and in early Christian literature: "Let us offer up a sacrifice of praise to God continually, that is, the fruit of lips which make confession to His name"',
      imgSrc:'assets/image/student/stud1.jpg'
    },
    {
      name:'WILLIAM EMMA',
      origin:'Washington',
      desc:'I think the website is GREAT! It is easy to follow along and definitely convienent because you can pull the information up whenever you need toThe ideas are also found both in the New Testament and in early Christian literature: "Let us offer up a sacrifice of praise to God continually, that is, the fruit of lips which make confession to His name"',
      imgSrc:'assets/image/student/stud2.jpg'
    },
    {
      name:'WILLIAM LUCAS',
      origin:'Washington',
      desc:'I think the website is GREAT! It is easy to follow along and definitely convienent because you can pull the information up whenever you need toThe ideas are also found both in the New Testament and in early Christian literature: "Let us offer up a sacrifice of praise to God continually, that is, the fruit of lips which make confession to His name"',
      imgSrc:'assets/image/student/stud3.jpg'
    },
    {
      name:'WILLIAM MIA',
      origin:'Washington',
      desc:'I think the website is GREAT! It is easy to follow along and definitely convienent because you can pull the information up whenever you need toThe ideas are also found both in the New Testament and in early Christian literature: "Let us offer up a sacrifice of praise to God continually, that is, the fruit of lips which make confession to His name"',
      imgSrc:'assets/image/student/stud4.jpg'
       }
  ]
  sectionBgVideo: sectionBgVideoI = {
    videoSrc:"assets/video/video.mp4",
    h1:'Quick Learn',
    p:'With our Training Masters'
  };
  getSectionBgVideo():  sectionBgVideoI{
    return this.sectionBgVideo;
  }
  getFeaturedCourses(): featuredCoursesI[]{
    return this.featuredCourses;
  }
  getParentSlideData(): parentSlideDataI[]{
     return this.parentSlideData;
  }
  getStudentSlideData(): studentSlideDataI[]{
     return this.studentSlideData;
  }
  constructor() { }
}
