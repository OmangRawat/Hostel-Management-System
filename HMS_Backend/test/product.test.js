const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')
var server2=require('../server');
const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

describe('Testing Routes',()=>{ 

    it('/api/',(done)=>{
        chai.request(server).post('/warden/showStudent').end((err, res)=>{
            expect(res.status).to.be.oneOf([200])
            done()
        })         
    })


    // it('/api/',(done)=>{
    //     chai.request(server).post('/warden/addStudent').send(
    //         {"name": "Aditya Shara",
    //         "phNo": "9898098765",
    //         "rollNo": "1901012",
    //         "address": "Allahabad, UP",
    //         "password": "123",
    //         "branch": "CSE",
    //         "passingYear" : "2023",
    //         "email" : "aditya@gmail.com",
    //         "roomNo" : "451"}
    //         ).end((err, res)=>{
    //         expect(res.status).to.be.oneOf([200])
    //         done()
    //     })         
    // })

    // it('/api/',(done)=>{
    //     chai.request(server).post('/warden/deleteStudent').send({"queryId": "625992a151b0abbdea01f1cd"}).end((err, res)=>{
    //         expect(res.status).to.be.oneOf([200])
    //         done()
    //     })         
    // })

    // it('/api/',(done)=>{
    //     chai.request(server).post('/warden/editStudent').end((err, res)=>{
    //         expect(res.status).to.be.oneOf([200])
    //         done()
    //     })         
    // })

    // it('/api/',(done)=>{
    //     chai.request(server).post('/warden/changePassword').end((err, res)=>{
    //         expect(res.status).to.be.oneOf([200])
    //         done()
    //     })         
    // })

    
    it('/api/',(done)=>{
        chai.request(server).post('/caretaker/showGuard').end((err, res)=>{
            expect(res.status).to.be.oneOf([200])
            done()
        })         
    })
    it('/api/',(done)=>{
        chai.request(server).post('/caretaker/showEmployee').end((err, res)=>{
            expect(res.status).to.be.oneOf([200])
            done()
        })         
    })

    

})