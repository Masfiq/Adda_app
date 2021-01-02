describe("All login func", ()=>{
    const user_body = {
        "email": "a@a",
        "pass": "A"
    }

    const user_body_wrong_pass = {
        "email": "a@a",
        "pass": "a"
    }

    const user_body_wrong_email = {
        "email": "A@A",
        "pass": "A"
    }

    const user_only_email = {"email": "a@a"}
    const user_only_pass = {"pass": "A"}

    test("Register with user_only_email", async(done) =>{
        const res = await req(app).post('/account/register').send(user_only_email)
        expect(res.statusCode).toBe(400)
        done()
    })

    test("Register with user_only_pass", async(done) =>{
        const res = await req(app).post('/account/register').send(user_only_pass)
        expect(res.statusCode).toBe(400)
        done()
    })

    test("Register with user_body", async(done) =>{
        const res = await req(app).post('/account/register').send(user_body)
        expect(res.statusCode).toBe(200)
        done()
    })

    test("Register with user_body again", async(done) =>{
        const res = await req(app).post('/account/register').send(user_body)
        expect(res.statusCode).toBe(400)
        done()
    })

    test("Login with user_only_email", async(done) =>{
        const res = await req(app).post('/account/login').send(user_only_email)
        expect(res.statusCode).toBe(400)
        done()
    })

    test("Login with user_only_pass", async(done) =>{
        const res = await req(app).post('/account/login').send(user_only_pass)
        expect(res.statusCode).toBe(400)
        done()
    })

    test("Login with user_body", async(done) =>{
        const res = await req(app).post('/account/login').send(user_body)
        expect(res.statusCode).toBe(200)
        done()
    })

    test("Login with user_body_wrong_pass", async(done) =>{
        const res = await req(app).post('/account/login').send(user_body_wrong_pass)
        expect(res.statusCode).toBe(400)
        done()
    })

    test("Login with user_body_wrong_email", async(done) =>{
        const res = await req(app).post('/account/login').send(user_body_wrong_email)
        expect(res.statusCode).toBe(400)
        done()
    })

    test("Delete Acc with user_only_email", async(done) =>{
        const res = await req(app).post('/account/del_acc').send(user_only_email)
        expect(res.statusCode).toBe(400)
        done()
    })

    test("Delete Acc with user_only_pass", async(done) =>{
        const res = await req(app).post('/account/del_acc').send(user_only_pass)
        expect(res.statusCode).toBe(400)
        done()
    })

    test("Delete acc user_body_wrong_pass", async(done) =>{
        const res = await req(app).post('/account/del_acc').send(user_body_wrong_pass)
        expect(res.statusCode).toBe(400)
        done()
    })

    test("Delete acc user_body_wrong_email", async(done) =>{
        const res = await req(app).post('/account/del_acc').send(user_body_wrong_email)
        expect(res.statusCode).toBe(400)
        done()
    })

    test("Delete acc user_body", async(done) =>{
        const res = await req(app).post('/account/del_acc').send(user_body)
        expect(res.statusCode).toBe(200)
        done()
    })
})
