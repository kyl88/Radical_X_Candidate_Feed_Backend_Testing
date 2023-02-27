
const UserController = require('../controllers/user.controller');
const UserModel = require('../controllers/model/user.model');
const httpsMocks = require('node-mocks-http');
const newModel = require('../../new-user.json');

UserModel.create = jest.fn();
UserModel.find = jest.fn();

let req,res,next;
beforeEach(()=>{
  
  req = httpsMocks.createRequest();
  res = httpsMocks.createResponse();
  next=jest.fn();

});

// Update method for User

describe('Usercontroller.updateUser',()=>{
  it("should have a updateUser function", ()=>{
   expect (typeof UserController.updateUser).toBe("function");
    
 
  });

   // Get UserById unit test
  describe("UserController.getUserById",()=>{
    it("Should have a getUserById",()=>{
      expect(typeof UserController.getUserById).toBe("function"); 

    });

     
 

    // Write the 404 unit test 

    it("should handle 404", async() => {
    


    });

  });
 
 });

// GET method test for User 
describe('UserController.createUser',()=> {
   it('It should call the User function',()=>{

     expect(typeof UserController.getUser).toBe('function');


   });

   it("should call UserModel.find({})", async()=>{
     await UserController.getUser(res,req,next);
     expect (UserModel.find).toBeCalledWith({});

   });

   



   it("should call UserModel.create", ()=> {
   
     res.body = newModel;
     UserController.createUser(req,res,next);
      //expect(UserModel.create).toBeCalledWith(newModel);
   });

    it ('user should be 201 status code',async()=>{
        req.body = newModel;
       await UserController.createUser(req,res,next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    });

    // Write the error handling - PUT 

    it("should handle errors", async() => {
    


   });

    // Write the 404 unit test 

    it("should handle 404", async() => {
    


    });
   

});