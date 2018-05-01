var SocialMedia = /** @class */ (function () {
    // constructor to initialize the class fields
    function SocialMedia(accountdetails, contact, friends, No_of_photos, groups, work, currentPlace, relationship, turnChat, request, noOfRequest, messageNotification, noOfMessages, birthday, post) {
        var _this = this;
        this.accountdetails = accountdetails;
        this.contact = contact;
        this.friends = friends;
        this.No_of_photos = No_of_photos;
        this.groups = groups;
        this.work = work;
        this.currentPlace = currentPlace;
        this.relationship = relationship;
        this.turnChat = turnChat;
        this.request = request;
        this.noOfRequest = noOfRequest;
        this.messageNotification = messageNotification;
        this.noOfMessages = noOfMessages;
        this.birthday = birthday;
        this.post = post;
        //function to access the data
        this.getFriends = function () {
            return _this.friends;
        };
        this.getNoOfPhotos = function () {
            return _this.No_of_photos;
        };
        this.getGroups = function () {
            return _this.groups;
        };
        this.getRelationhip = function () {
            return _this.relationship;
        };
        this.getNoOfMessages = function () {
            return _this.noOfMessages;
        };
        this.getCurrentPlace = function () {
            return _this.currentPlace;
        };
        this.getTurnChat = function () {
            return _this.turnChat;
        };
        this.getRequest = function () {
            return _this.request;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getNoOfRequest = function () {
            return _this.noOfRequest;
        };
        // getters for private data
        this.getAccountDetails = function () {
            return _this.accountdetails;
        };
        this.getContact = function () {
            return _this.contact;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getMessageNotification = function () {
            return _this.messageNotification;
        };
        this.setMessageNotification = function (updatedNotification) {
            _this.messageNotification = updatedNotification;
        };
        this.accountdetails = accountdetails;
        this.contact = contact;
        this.friends = friends;
        this.No_of_photos = No_of_photos;
        this.groups = groups;
        this.work = work;
        this.currentPlace = currentPlace;
        this.relationship = relationship;
        this.turnChat = turnChat;
        this.request = request;
        this.noOfRequest = noOfRequest;
        this.messageNotification = messageNotification;
        this.noOfMessages = noOfMessages;
        this.birthday = birthday;
        this.post = post;
    } //end of constructor
    return SocialMedia;
}()); //end of class
// creating reference of object using new keyword
var mediaDetails = new SocialMedia({ "email": "jagriti.taneja92@gmail.com",
    "password": "Satnaam" }, 9728684879, 450, 50, ["yaro ka adda", "skrm mission", "ishq subhanallah"], "Eigen Technologies", "New Delhi", "single", true, true, 30, false, 80, "19 june 1992");
// calling of functions
console.log(" No. of friends in a profile:- " + mediaDetails.getFriends());
console.log(" No. of photos that profile contain:- " + mediaDetails.getNoOfPhotos());
console.log(" No. of request that profile have:- " + mediaDetails.getNoOfRequest());
console.log(" Current place of the person:- " + mediaDetails.getCurrentPlace());
console.log(" Relationship status of the person:- " + mediaDetails.getRelationhip());
console.log(" No. of messages the profile have:- " + mediaDetails.getNoOfMessages());
console.log(" Message Notification before setting new value:- " + mediaDetails.getRequest());
console.log(" Birthday of the user:- " + mediaDetails.getBirthday());
console.log(" Chat status of the user:- " + mediaDetails.getTurnChat());
console.log(" Group info of the user:- " + mediaDetails.getGroups());
// display private data
console.log(" Message Notification before setting new value:- " + mediaDetails.getMessageNotification());
// set message notification through setter
mediaDetails.setMessageNotification(true);
console.log(" Message Notification after setting new value:- " + mediaDetails.getMessageNotification());
console.log(" Contact details of the person:- " + mediaDetails.getContact());
console.log(" work details of the person :- " + mediaDetails.getWork());
var acnt;
acnt = {};
acnt = mediaDetails.getAccountDetails();
console.log("Email of the person:- " + acnt['email']);
console.log("Password of the person :- " + acnt['password']);
