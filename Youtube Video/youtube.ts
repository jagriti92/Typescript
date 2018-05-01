
class YoutubeVideo{
  // fields or properties
  title : string;
  pageName : string;
  subscription : boolean;
  no_of_subscription : number;
  private likes : number;
  comments : number;
  dislikes : number;
  share : number;
  subtitle : string;
  theaterMode : boolean;
  autoplay :string;
  annotation : string;
  speed :string;
  private quality : string;
  fullScreen : boolean;
  watchLater : boolean;
  private subscriptionNames : string[];
  likesDetails : object;
  commentDetails : any
  // end of fiels

  // constructor to initialize the class fields
  constructor (title : string , pageName : string , subscription : boolean,no_of_subscription : number,likes : number,comments : number,dislikes : number,share : number,subtitle : string,theaterMode : boolean,autoplay :string,annotation : string,quality : string,fullScreen : boolean, watchLater : boolean,subscriptionNames : string[],likesDetails : object,commentDetails ?: any)
  {
    this.title=title;
    this.pageName=pageName;
    this.subscription=subscription;
    this.no_of_subscription=no_of_subscription;
    this.likes=likes;
    this.comments=comments;
    this.dislikes=dislikes
    this.share=share;
    this.subtitle=subtitle;
    this.theaterMode=theaterMode;
    this.autoplay=autoplay;
    this.annotation=annotation;
    this.quality=quality;
    this.fullScreen=fullScreen;
    this.watchLater=watchLater;
    this.subscriptionNames=subscriptionNames;
    this.likesDetails=likesDetails;
    this.commentDetails=commentDetails;
  } //end of constructor

  //function to access the data
  getTitle = () =>{
    return this.title
  }
  getPageName = () =>{
    return this.pageName
  }
  getSubscription = () =>{
    return this.subscription
  }
  getNoOfSubscription = () =>{
    return this.no_of_subscription
  }
  getComments = () =>{
    return this.comments
  }
  getShare = () =>{
    return this.share
  }
  getSubtitle = () =>{
    return this.subtitle
  }

  getAutoPlay = () =>{
    return this.autoplay
  }
  getAnnotation = () =>{
    return this.annotation
  }
  getFullScreen = () =>{
    return this.fullScreen
  }
  getTheaterMode(){
    return this.theaterMode
  }
  getWatchLater = () =>{
    return this.watchLater
  }
  getLikesDetails = () =>{
    return this.likesDetails
  }
  getCommentDetails = () =>{
    // take a string array type variable data
    let data : any;
    // initially data array is empty
    data=[];
    // iterate loop till subscription names length
   for (let i =0;i<this.commentDetails.length;i++){
    //for(let i in this.subscriptionNames){
    // condition to check if the array is not undefined and null
     if(this.commentDetails[i] !== undefined && this.commentDetails[i] !== null){
      // if the condition is satisfied then push the array elements in an empty array
      data.push(this.commentDetails[i]);
    }
  }
  // return the data array once the iteration is over
 return data;
  }
  getDislikes = () =>{
    return this.dislikes
  }
  
  // getters for private data
 
  getSubscriptionNames = () =>{
    // take a string array type variable data
    let data : string[];
    // initially data array is empty
    data=[];
    // iterate loop till subscription names length
   for (let i =0;i<this.subscriptionNames.length;i++){
    //for(let i in this.subscriptionNames){
    // condition to check if the array is not undefined and null
     if(this.subscriptionNames[i] !== undefined && this.subscriptionNames[i] !== null){
      // if the condition is satisfied then push the array elements in an empty array
      data.push(this.subscriptionNames[i]);
    }
  }
  // return the data array once the iteration is over
 return data;
 //return this.subscriptionNames;
}
  getQuality = () =>{
    return this.quality
  }
  getLikes = () =>{
    return this.likes
  }

  //setters for private data
  
  setQuality = (hd : string) =>{
    this.quality = hd
  }
} //end of class
  
// creating reference of object using new keyword
  
  let videoDetails = new YoutubeVideo("Focus on Yourself Not Others","Law of Attraction", true, 35000,15000,3000,20,40,"off",false,"on","off","720p",true,false,["jagz","Aashna","Wasif"],
  { "name": "vick",
    "id" : 12,
    "date" : "12 july"}, ["jagriti", 2, true, "7:00am"]);

// calling of functions

  console.log("Title of the video:- "+videoDetails.getTitle());
  console.log("Annotation info of the video:- "+videoDetails.getAnnotation());
  console.log("Autoplay info of the video:- "+videoDetails.getAutoPlay());
  console.log("No. of comments in the video:- "+videoDetails.getComments());
  console.log("Subscription info of the video:- "+videoDetails.getSubscription());
  console.log("No. of dislikes in the video:- "+videoDetails.getDislikes());
  console.log("Page Name of the video:- "+videoDetails.getPageName());
  console.log("No. of subscription of the video:- "+videoDetails.getNoOfSubscription());
  console.log("Share details of the video:- "+videoDetails.getShare());
  console.log("Subtitle info of the video:- "+videoDetails.getSubtitle());
  console.log("Watch Later info of the video:- "+videoDetails.getWatchLater());
  console.log("Full Screen of the video:- "+videoDetails.getFullScreen());
  console.log("TheaterMode of the video:- "+videoDetails.getTheaterMode());
  // like details
  let commdata : object;
  commdata = {};
  commdata = videoDetails.getLikesDetails();
  console.log("Name of the person who like the video:- "+commdata['name']);
  console.log("Id of the person who like the video:- "+commdata['id']);
  console.log("Date when the video is liked:- "+commdata['date']);
    // take a empty array
    let c_details= [] ;
    // put all the values in this that are returned from data array
    c_details = (videoDetails.getCommentDetails());
    // displaye the array elements
    console.log("Details of Comments:- "+c_details);
  
// Display private Data 
    
  // take a empty array
    let details= [] ;
    // put all the values in this that are returned from data array
    details = (videoDetails.getSubscriptionNames());
    // displaye the array elements
    console.log("Name of person that took subscription:- "+details);
    console.log("No. of likes:- "+videoDetails.getLikes());
    console.log("Quality before setting new value:- "+videoDetails.getQuality());

    // set quality through setter
    videoDetails.setQuality("1024p");
    console.log(" Quality after setting new value:- "+videoDetails.getQuality());