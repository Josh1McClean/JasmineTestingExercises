it('should calculate the monthly rate correctly', function () {
    // ...
    let values = {
        amount: 100000,
        years: 20,
        rate: 5.5
    };
    expect(calculateMonthlyPayment(values).monthlyPayment).toEqual('$687.89');
});

it("should return a result with 2 decimal places", function () {
    let values = {
        amount: 100120,
        years: 15,
        rate: 6.8
    };
    expect(calculateMonthlyPayment(values).monthlyPayment).toEqual('$888.75');
});
