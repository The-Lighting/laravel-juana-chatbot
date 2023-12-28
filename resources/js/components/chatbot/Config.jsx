import React from "react";
import { createChatBotMessage } from '@locomotiveb93/react-chatbot-kit';
import BaseOptions from "../components/baseOptions/BaseOptions";
import LinkList from "../components/LinkList/LinkList";
import MoreCourseOptions from "../components/kindsofcoursesoptions/TypesOfCourses";
import GameBasedLearning from "../components/kindsofcoursesoptions/GameBasedLearning";
import ExperientialLearning from "../components/kindsofcoursesoptions/ExperentialLearning";
// import SingleOptionWithLink from "../components/singleLinkOnclick/option";
import PersonalDevelopment from "../components/kindsofcoursesoptions/PersonalDevelopment";
// import ActionProvider from '../../../recheck/chat/src/chatbot/ActionProvider';
const config = {
  botName: "Nex",
  initialMessages: [ /*createChatBotMessage("Hi, I am Nex! "),*/ createChatBotMessage("Hope you are doing well. What would you like to Ask?",
  {
    //options object is given here
    widget: 'BaseOptions',
  })],
  widgets: [
    {
      widgetName: "BaseOptions",
      widgetFunc: (props) => <BaseOptions {...props} />,
    },
    {
      widgetName: "CertainCourse",
      widgetFunc: (props) => <MoreCourseOptions {...props} />,
      // props: {
      //   options: [
      //     {
      //       text: "Game Based Learning",
      //       handler: window.open(<GameBasedLearning/>),
      //       id: 1,
      //     },
      //     {
      //       text: "Experiential Learing",
      //       handler:<ExperientialLearning />,
      //       id: 2,
      //     },
      //     {
      //       text: "Personal Development",
      //       handler:<PersonalDevelopment />,
      //       id: 3,
      //     },
      //   ],
      // },
    },
    {
      widgetName: 'gamebasedlearninglink',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Game Based Learning",
            handler: <GameBasedLearning />,// not being rendered right now
            id: 1
            , url: "https://justnexo.com/categories/game-based-learning"
          },
        ]
      }
    },
    {
      widgetName: 'experientiallearning',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Experiential Learning",
            handler: <ExperientialLearning />,//not being rendered right now
            id: 2,
            url: "https://justnexo.com/categories/experiential-learning",
          }
        ]
      }
    }, {
      widgetName: 'personalDevelopment',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [{
          text: "Personal Development Courses",
          handler: <PersonalDevelopment />,// really no need as this is not being rendered right now
          id: 3,
          url: "https://justnexo.com/categories/personal-development",
        }]
      }
    },
    {
      widgetName: 'headToForum',
      widgetFunc: (props) =>< LinkList {...props}/>,
      props:{
        options:[{
          text:"head to the Forums",
          url: "https://justnexo.com/forums",
          id: 1,
        }]
      }
    },
    {
      widgetName: 'HeadToStore',
      widgetFunc: (props) => <LinkList {...props} />,
      props:{
        options:[{
          text: "head to the Store",
          url: "https://justnexo.com/products",
          id: 1,
        }]
      }
    },{
      widgetName: 'HeadToInstructors',
      widgetFunc: (props) => < LinkList {...props} />,
      props:{
        options:[{
          text: "more on Instructors",
          url: "https://justnexo.com/instructors",
          id: 1
        },{
          text: "Find an Instructor",
          url: "https://justnexo.com/instructor-finder",
          id: 2
        },{
          text: "become an Instructor",
          url: "https://justnexo.com/become-instructor",
          id: 3
        }
      ]
      }
    },{
      widgetName: "headToCertificate",
      widgetFunc: (props) => < LinkList {...props} />,
      props: {
        options:[{
          text: "Certificate Verification",
          url: "https://justnexo.com/certificate_validation",
          id:1
        }]
      }
    },
    {
      widgetName: 'contactus',
      widgetFunc:(props) =>< LinkList {...props}/>,
      props:{
        options:[{
          text:"Engage with real conversations in the Forums",
          url: "https://justnexo.com/forums",
          id: 1,
        },{
          text: 'Request a callback',///// just add this if you want to add a request a callback forms page in there along with the other 
          url:'../contact',/// currently this only work with the linklist component only
          id: 2,
        }]
      }
    },
    {
      widgetName: 'headtoJuanaNexo',
      widgetFunc:(props) =>< LinkList {...props}/>,
      props:{
        options:[{
          text: "head to Nexo's Introduction",
          url: "https://juanatech.com/nexo/",
          id: 1,
        }]
      }
    }


  ],



  //here we have defined the various steps in this extra
  customStyles: {
    botMessageBox: {
      backgroundColor: "#cf202e",
    },
    chatButton: {
      backgroundColor: "#cf202e",
    },
  },
}

export default config;