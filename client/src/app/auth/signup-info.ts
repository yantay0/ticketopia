export class SignUpInfo {
  name: string;
  username: string;
  email: string;
  role: string[];
  password: string;


  constructor(name: string, username: string, email: string, role: string[], password: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.role = ['user'];
    this.password = password;
  }
}
