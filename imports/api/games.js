import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Games = new Mongo.Collection("games");

if (Meteor.isServer) {
  Meteor.publish("games", function messagesPublish() {
    return Games.find(
      {},
      {
        limit: 10
      }
    );
  });
}