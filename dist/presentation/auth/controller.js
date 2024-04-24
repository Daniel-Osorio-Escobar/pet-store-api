"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const domain_1 = require("../../domain");
class AuthController {
    constructor() {
        this.registerUser = (req, res) => {
            const [error, registerUserDto] = domain_1.RegisterUserDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            res.json(registerUserDto);
        };
        /*
      registerUser = (req: Request, res: Response) => { // 4
          res.json('registerUser controller') // 5
      } // 3
  */
        this.loginUser = (req, res) => {
            res.json('loginUser controller'); // 8
        }; // 6
    } // 2
}
exports.AuthController = AuthController;
