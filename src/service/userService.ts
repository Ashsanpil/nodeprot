import { UserRepository } from '../repository/UserRepository';
import { UserResponse } from '../dto/response/UserResponse';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers(): Promise<UserResponse[]> {
    return this.userRepository.getAllUsers();
  }

  async getUserById(id: number): Promise<UserResponse | null> {
    return this.userRepository.getUserById(id);
  }
}
