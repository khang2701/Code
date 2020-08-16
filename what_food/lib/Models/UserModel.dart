class User {
  String id;
  String email;
  String phone;
  String password;
  String name;
  String avatar;
//Constructor
  User(
      {this.id, this.email, this.phone, this.name, this.password, this.avatar});
//Create Static Method
  factory User.fromJson(Map<String, dynamic> json) {
    return User(
        id: json["_id"],
        email: json["email"],
        phone: json["phone"],
        name: json["name"],
        password: json["password"],
        avatar: json["avatar"]);
  }

}
