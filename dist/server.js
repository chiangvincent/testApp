"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3000;
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
app_1.default.get('/', (req, res) => res.send('Hello World!'));
//# sourceMappingURL=server.js.map