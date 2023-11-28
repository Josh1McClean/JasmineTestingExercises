describe("Servers test (with setup and tear-down)", function () {
    beforeEach(function () {
        // initialization logic
        serverNameInput.value = 'Josh';
    });
    it('should add a new server to allServers on submitServerInfo()', function () {
        submitServerInfo();
        expect(Object.keys(allServers).length).toEqual(1);
        expect(allServers['server' + serverId].serverName).toEqual('Josh');
    });

    describe('Update #serverTable', () => {
        it('should update #serverTable on updateServerTable();', function () {
            submitServerInfo();
            updateServerTable();
            let currentTdValues = document.querySelectorAll('#serverTable tbody tr td');
            expect(currentTdValues.length).toEqual(3);
            expect(currentTdValues[0].innerText).toEqual('Josh');
            expect(currentTdValues[1].innerText).toEqual('$0.00');
            expect(currentTdValues[2].innerText).toEqual('X');
        });
    });
    afterEach(function () {
        serverTbody.innerText = '';
        serverId = 0;
        allServers = {}
    });
});

