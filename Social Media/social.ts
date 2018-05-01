class SocialMedia{

  // constructor to initialize the class fields
  constructor (private accountdetails : object,private contact : number,public friends : number,public No_of_photos :number,public groups : string[],private work :string,public currentPlace : string, public relationship : string,public turnChat : boolean, public request :boolean,public  noOfRequest : number, private messageNotification : boolean, public noOfMessages : number, public birthday : string, public  post ?: any)
  {
    this.accountdetails=accountdetails;
    this.contact=contact;
    this.friends=friends;
    this.No_of_photos=No_of_photos;
    this.groups=groups;
    this.work=work;
    this.currentPlace=currentPlace;
    this.relationship=relationship;
    this.turnChat=turnChat;
    this.request=request;
    this.noOfRequest=noOfRequest;
    this.messageNotification=messageNotification;
    this.noOfMessages=noOfMessages;
    this.birthday=birthday;
    this.post=post;
  } //end of constructor

  //function to access the data
  getFriends = () =>{
    return this.friends
  }
  getNoOfPhotos = () =>{
    return this.No_of_photos
  }
  getGroups = () =>{
    return this.groups
  }
  getRelationhip = () =>{
    return this.relationship
  }
  getNoOfMessages = () =>{
    return this.noOfMessages
  }
  getCurrentPlace = () =>{
    return this.currentPlace
  }
  getTurnChat = () =>{
    return this.turnChat
  }
  getRequest = () =>{
    return this.request
  }
  getBirthday = () =>{
    return this.birthday
  }
  getNoOfRequest = () =>{
    return this.noOfRequest
  }
 
  // getters for private data
  getAccountDetails = () =>{
    return this.accountdetails
  }
  getContact = () =>{
    return this.contact
  }
  getWork= () =>{
    return this.work
  }
  getMessageNotification = () =>{
    return this.messageNotification
  }
  setMessageNotification = (updatedNotification : boolean) =>{
    this.messageNotification = updatedNotification
  }
} //end of class

// creating reference of object using new keyword
  
  let mediaDetails = new SocialMedia( 
    {"email": "jagriti.taneja92@gmail.com",
      "password" : "Satnaam"},9728684879, 450,50,["yaro ka adda", "skrm mission", "ishq subhanallah"],"Eigen Technologies","New Delhi","single", true, true,30,false,80,"19 june 1992");

// calling of functions

  console.log(" No. of friends in a profile:- "+mediaDetails.getFriends());

  console.log(" No. of photos that profile contain:- "+mediaDetails.getNoOfPhotos());

  console.log(" No. of request that profile have:- "+mediaDetails.getNoOfRequest());

  console.log(" Current place of the person:- "+mediaDetails.getCurrentPlace());

  console.log(" Relationship status of the person:- "+mediaDetails.getRelationhip());

  console.log(" No. of messages the profile have:- "+mediaDetails.getNoOfMessages());

  console.log(" Message Notification before setting new value:- "+mediaDetails.getRequest());

  console.log(" Birthday of the user:- "+mediaDetails.getBirthday());

  console.log(" Chat status of the user:- "+mediaDetails.getTurnChat());

  console.log(" Group info of the user:- "+mediaDetails.getGroups());

  // display private data

    console.log(" Message Notification before setting new value:- "+mediaDetails.getMessageNotification());
    
    // set message notification through setter
    
      mediaDetails.setMessageNotification(true);
      console.log(" Message Notification after setting new value:- "+mediaDetails.getMessageNotification());
      
      console.log(" Contact details of the person:- "+mediaDetails.getContact());
      console.log(" work details of the person :- "+mediaDetails.getWork());
    
      let acnt : object;
      acnt = {};
      acnt = mediaDetails.getAccountDetails();
      console.log("Email of the person:- "+acnt['email']);
      console.log("Password of the person :- "+ acnt['password']);
   