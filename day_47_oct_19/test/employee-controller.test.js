const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const employeeModel = require('../models/employee_model');
const app = require('../app');

chai.use(chaiHttp);
const { expect } = chai;



describe('Testing Employee Controller', () => {
    let findStub;
    let findOneStub;

    beforeEach(() => {
        findStub = sinon.stub(employeeModel, 'find');
        findOneStub = sinon.stub(employeeModel, 'findOne');
    })
    afterEach(() => {
        findStub.restore();
        findOneStub.restore();
    })

    it('should return all employees', async () => {
        let mockEmployees = [
            { _id: 111, eId: 101, name: 'Sanjay', sal: 5000, gender: 'male' },
            { _id: 222, eId: 102, name: 'Geeta', sal: 7000, gender: 'female' }
        ]
        findStub.resolves(mockEmployees);

        const res = await chai.request(app).get('/employees');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(mockEmployees);
    })
    it('Get 1 Employee', async () => {
        let mockEmployee =
            { _id: 111, eId: 101, name: 'Sanjay', sal: 5000, gender: 'male' }
        findOneStub.resolves(mockEmployee);

        const res = await chai.request(app).get('/employees/101');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(mockEmployee);
    })
    it('should return 204 when user is not found', async () => {
        findOneStub.resolves(null);

        const res = await chai.request(app).get('/employees/1111');
        expect(res).to.have.status(204);
        expect(res.body).to.deep.equal({});
    })
})