import { Request, Response } from 'express';
import { UserService } from '../service/userService';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  }

  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.id, 10);
      const user = await this.userService.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).send('User Not Found');
      }
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  }
}
