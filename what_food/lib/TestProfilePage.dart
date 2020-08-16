import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:what_food/Services/AuthService.dart';
import 'Models/ServerModels.dart';
import 'Models/UserModel.dart';
import 'package:cached_network_image/cached_network_image.dart';

class TestProfilePage extends StatefulWidget {
  TestProfilePage({Key key}) : super(key: key);

  @override
  _TestProfilePageState createState() => _TestProfilePageState();
}

class _TestProfilePageState extends State<TestProfilePage> {
  Future<User> user;
 

  @override
  void initState() {
    super.initState();
    user = profile_Author();
  }

  Future<User> profile_Author()  {
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fetch Data Example',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('Fetch Data Example'),
        ),
        body: Center(
          child: FutureBuilder<User>(
            future: user,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return Text("${snapshot.data.phone}");
              } else if (snapshot.hasError) {
                return Text("${snapshot.error}");
              }

              // By default, show a loading spinner.
              return CircularProgressIndicator();
            },
          ),
        ),
      ),
    );
  }
}
