// import chai
const chai = require('chai')
// gunakan expect
var expect = chai.expect
// import chaiHttp
const chaiHttp = require('chai-http')
// import app
const app = require('../app')

// use chaiHttp
chai.use(chaiHttp)

// var token = ''

describe('Users', () => {
    it('Should be Login and Get Token', () => {
        chai.request(app)
            // dari routes users
            .post('/users/login')
            // mengirim data, isi datanya ada di routes => users => /login
            .send({username: 'ikhda', password: 'rahasia'})
            // menerima dua paramater
            .end((err, res) => {
                // lakukan expect disini
                // to have => harus punya
                expect(res).to.have.status(200)
                // to be => harus berupa
                expect(res).to.be.json
                // harus memiliki dua property dari routes => users => /login => message dan data (dalam then)
                expect(res).to.have.property('message')
                // isi message harus sama dengan di routes users login
                expect(res.body.message).to.equal('Success Login')
                expect(res).to.have.property('data')
                // harus punya token dalam body
                expect(res.body.data).to.have.property('token')
                // ambil token dan simpan
                // token = res.body.data.token
                // ini penanda selesai agar tidak lompat ke bawah sebelum done ini di panggil
                // done()
            })
    })
    // testing jika gagal login
    it('Should give error when username and password wrong', () => {
        chai.request(app)
            // dari routes users
            .post('/users/login')
            // mengirim data, isi datanya ada di routes => users => /login
            .send({username: 'ikhda', password: 'rahasialah'})
            // menerima dua paramater
            .end((err, res) => {
                // lakukan expect disini
                // to have => harus punya
                expect(res).to.have.status(403)
                // to be => harus berupa
                expect(res).to.be.json
                // harus memiliki dua property dari routes => users => /login => message dan data (dalam then)
                expect(res).to.have.property('message')
                // isi message harus sama dengan di routes users login
                expect(res.body.message).to.equal('Invalid Login')
            })
    })
})