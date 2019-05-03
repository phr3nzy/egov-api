import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
	username: {
		type: String,
		required: [true, "Username is required"],
		unique: true,
		trim: true
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
		trim: true
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		unique: true,
		trim: true
	}
	// firstName: {
	// 	type: String,
	// 	required: [true, "First name is required"]
	// },
	// lastName: {
	// 	type: String,
	// 	required: [true, "Last name is required"]
	// }
});

userSchema.set("toJSON", { virtuals: true });

const User = mongoose.model("User", userSchema);

export default User;
