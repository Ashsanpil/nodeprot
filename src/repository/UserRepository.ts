import { promises as fs } from 'fs';
import path from 'path';
import { UserResponse } from '../dto/response/UserResponse';

export class UserRepository {
  private usersFilePath: string;

  constructor() {
    this.usersFilePath = path.join(__dirname, '../data/users.json');
  }

  async getAllUsers(): Promise<UserResponse[]> {
    const data = await fs.readFile(this.usersFilePath, 'utf8');
    return JSON.parse(data);
  }

  async getUserById(id: number): Promise<UserResponse | null> {
    const users = await this.getAllUsers();
    return users.find(user => user.id === id) || null;
  }
}
