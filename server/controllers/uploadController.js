const cloudinary = require('cloudinary').v2;

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: 'No image uploaded' });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    res.status(200).json({
      msg: 'Image uploaded successfully',
      imageUrl: result.secure_url,
    });
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    res.status(500).json({ msg: 'Upload failed', error: error.message });
  }
};

module.exports = { uploadImage }; // ✅ named export
