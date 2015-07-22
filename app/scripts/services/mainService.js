'use strict';

var mhApp = angular.module('services.main', []);

mhApp
  .factory('mainService', [

      function () {

        return {
          data: [
            {
              "date": "September 23, 2014",
              "name": "Advocacy, Integrated Campaign of the Year",
              "summary": "This year, Modern Healthcare and Advertising Age partnered to create the Healthcare Marketing IMPACT Awards to recognize healthcare's best advertising, marketing, promotion and communication campaigns on and across all media platforms.",
              "image": "http://www.modernhealthcare.com/images/impact-awards/2014/309239961/gold-initiative-01.jpg",
              "likes": "25",
              "agencyFirm": "Weber Shandwick",
              "client": "Covered California",
              "imageCount": "5",
              "videoCount": "3"
            },
            {
              "date": "September 23, 2014",
              "name": "Insurers, Integrated Campaign of the Year",
              "summary": "This year, Modern Healthcare and Advertising Age partnered to create the Healthcare Marketing IMPACT Awards to recognize healthcare's best advertising, marketing, promotion and communication campaigns on and across all media platforms.",
              "image": "http://www.modernhealthcare.com/images/impact-awards/2014/309239969/gold-campbell-mithun-01.JPG",
              "likes": "32",
              "agencyFirm": "Digitas Health LifeBrands",
              "client": "Connecting Nurses",
              "imageCount": "10",
              "audioCount": "2"
            },
            {
              "date": "September 23, 2014",
              "name": "Providers, Integrated Campaign of the Year",
              "summary": "This year, Modern Healthcare and Advertising Age partnered to create the Healthcare Marketing IMPACT Awards to recognize healthcare's best advertising, marketing, promotion and communication campaigns on and across all media platforms.",
              "image": "http://www.modernhealthcare.com/images/impact-awards/2014/309239965/gold-levlane-03.jpg",
              "likes": "25",
              "agencyFirm": "LevLane",
              "client": "Kennedy Health System/Kennedy Health Alliance",
              "imageCount": "4",
              "audioCount": "2",
              "videoCount": "5"
            },
            {
              "date": "September 23, 2014",
              "name": "Insurers, Video Campaign of the Year",
              "summary": "This year, Modern Healthcare and Advertising Age partnered to create the Healthcare Marketing IMPACT Awards to recognize healthcare's best advertising, marketing, promotion and communication campaigns on and across all media platforms.",
              "image": "http://www.modernhealthcare.com/assets/jpg/CH100569722.JPG",
              "likes": "12",
              "agencyFirm": "North",
              "client": "Cover Oregon",
              "videoCount": "5"
            },
            {
              "date": "September 23, 2014",
              "name": "Providers, Social Media Campaign of the Year",
              "summary": "This year, Modern Healthcare and Advertising Age partnered to create the Healthcare Marketing IMPACT Awards to recognize healthcare's best advertising, marketing, promotion and communication campaigns on and across all media platforms.",
              "image": "http://www.modernhealthcare.com/images/impact-awards/2014/309239957/gold-imaginasium-01.jpg",
              "likes": "35",
              "agencyFirm": "Weber Shandwick",
              "client": "Covered California",
              "imageCount": "9"
            },
            {
              "date": "September 23, 2014",
              "name": "Advocacy, Social Media Campaign of the Year",
              "summary": "This year, Modern Healthcare and Advertising Age partnered to create the Healthcare Marketing IMPACT Awards to recognize healthcare's best advertising, marketing, promotion and communication campaigns on and across all media platforms.",
              "image": "http://www.modernhealthcare.com/images/impact-awards/2014/309239959/gold-digitas-health.jpg",
              "likes": "3",
              "agencyFirm": "Digitas Health LifeBrands",
              "client": "Connecting Nurses",
              "imageCount": "1"
            },
            {
              "date": "September 23, 2014",
              "name": "Providers, Audio Campaign of the Year",
              "summary": "This year, Modern Healthcare and Advertising Age partnered to create the Healthcare Marketing IMPACT Awards to recognize healthcare's best advertising, marketing, promotion and communication campaigns on and across all media platforms.",
              "image": "http://www.pagnes.com/images/kennedy_health_care_center_60-bed_sub-acute_addition_1_large.jpg",
              "likes": "5",
              "agencyFirm": "LevLane",
              "client": "Kennedy Health System, Kennedy Health Alliance",
              "audioCount": "6"
            },
            {
              "date": "September 23, 2014",
              "name": "Providers, Patient Education Campaign of the Year",
              "summary": "This year, Modern Healthcare and Advertising Age partnered to create the Healthcare Marketing IMPACT Awards to recognize healthcare's best advertising, marketing, promotion and communication campaigns on and across all media platforms.",
              "image": "http://www.modernhealthcare.com/images/impact-awards/2014/309239971/gold-seiden-01.jpg",
              "likes": "63",
              "agencyFirm": "Seiden",
              "client": "New York-Presbyterian Hospital",
              "imageCount": "4",
              "videoCount": "3"
            },
            {
              "date": "September 23, 2014",
              "name": "Suppliers, Patient Education Campaign of the Year",
              "summary": "This year, Modern Healthcare and Advertising Age partnered to create the Healthcare Marketing IMPACT Awards to recognize healthcare's best advertising, marketing, promotion and communication campaigns on and across all media platforms.",
              "image": "http://www.modernhealthcare.com/images/impact-awards/2014/309239974/gold-2e-creative-04.jpg",
              "likes": "7",
              "agencyFirm": "2e Creative",
              "client": "Siemens Healthcare",
              "imageCount": "1",
              "videoCount": "3"
            }
          ]
        };

      }

  ])
;
