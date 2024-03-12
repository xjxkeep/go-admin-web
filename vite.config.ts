import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

function resolve(dir: string) {
  return path.join(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  envDir:"./viteenv",// 相对路径
  plugins: [vue(),
  createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
    symbolId: 'icon-[dir]-[name]',
  })
  ],
  // 设置别名
  resolve: {
    alias: {
      "@":path.resolve("./src")
    }
  }
})
