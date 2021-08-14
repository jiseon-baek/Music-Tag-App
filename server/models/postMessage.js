import mongoose from 'mongoose';

//First, have to create mongoose schema.

const postSchema = mongoose.Schema({
	title: String,
	message: String,
	creator: String,
	tags: [String],
	selectedFile: String,
	likes: {
		type: [String],
		default: [],
	},
	createdAt: {
		type: Date,
		default: new Date()
	}
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;