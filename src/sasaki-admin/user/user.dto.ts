export class CreateUserDTO {
  readonly username: String;
  readonly avatar_url: String;
  readonly created_at: String;
  readonly nickname: String;
  readonly password: String;
  readonly phone: String;
  readonly updated_at: String;
  readonly role: String;
}

export class EditUserDTO {
  readonly username: String;
  readonly avatar_url: String;
  readonly created_at: String;
  readonly nickname: String;
  readonly password: String;
  readonly phone: String;
  readonly updated_at: String;
  readonly role: String;
}
