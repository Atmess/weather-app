import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

export default merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      "...", 
      new ImageMinimizerPlugin({
        minimizer: {
          // Use sharpMinify instead of sharpGenerate
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              // Compresses JPEGs and PNGs while keeping their extensions
              jpeg: { quality: 80 },
              png: { quality: 80 },
            },
          },
        },
      }),
    ],
  },
  performance: {
    hints: false, 
  },
});