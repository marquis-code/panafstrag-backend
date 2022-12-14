const mongoose = require("mongoose");
let BoardMembersSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: [String],
    },
    university: {
      type: String,
    },
    department: {
      type: String,
    },
    faculty: {
      type: String,
    },
    position: {
      type: String,
    },
    bio: {
      type: String,
    },
    dateJoined: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const BoardMembers = mongoose.model("BoardMember", BoardMembersSchema);

module.exports = BoardMembers;
