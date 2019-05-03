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
	// nationalNumber: {
	// 	type: Number,
	// 	required: [true, "National number is required"],
	// 	minlength: 8,
	// 	maxlength: 16,
	// 	unique: true,
	// 	trim: true
	// },
	password: {
		type: String,
		required: [true, "Password is required"],
		unique: true,
		trim: true
	},
	userType: {
		type: String,
		enum: ["Citizen", "Public Business", "Private Business", "Admin"],
		required: [true, "User type is required"]
	},
	serviceType: {
		type: String,
		enum: ["educational", "medical", "infrastructural", "economical"],
		required: false
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
