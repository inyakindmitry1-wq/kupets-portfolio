import Window from '../Window';
import { Heart, MessageCircle, ExternalLink, Grid, Bookmark } from 'lucide-react';

export default function InstagramWindow({ isOpen, onClose }) {
  const posts = [
    { title: 'Interactive Portfolio OS', likes: 142, comments: 18, tag: 'React + Tailwind' },
    { title: 'Cyberpunk E-Commerce UI', likes: 289, comments: 34, tag: 'UI/UX Concept' },
    { title: '3D WebGL Landing Experience', likes: 512, comments: 67, tag: 'Three.js' },
    { title: 'Lo-Fi Workstation Design', likes: 390, comments: 45, tag: 'Figma Design' },
    { title: 'Minimalist SaaS Dashboard', likes: 215, comments: 22, tag: 'Fullstack' },
    { title: 'Creative Studio Web App', likes: 478, comments: 53, tag: 'Animation' },
  ];

  return (
    <Window title="Instagram — @k.upets" isOpen={isOpen} onClose={onClose} width="w-full max-w-2xl">
      <div className="space-y-6">
        {/* Instagram Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-gray-200">
          {/* Avatar with Gradient Ring */}
          <div className="p-1 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shadow-md">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white bg-gray-100">
              <img 
                src="/avatar.png" 
                alt="@k.upets" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "/wallpaper.png";
                }}
              />
            </div>
          </div>

          {/* Profile Stats & Info */}
          <div className="flex-1 text-center sm:text-left space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <h2 className="text-xl font-bold text-gray-900">@k.upets</h2>
              <a 
                href="https://t.me/kupetsnovgorodny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Написать</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex justify-center sm:justify-start gap-6 text-xs text-gray-700">
              <div><span className="font-bold text-gray-900">42</span> постов</div>
              <div><span className="font-bold text-gray-900">1.8k</span> подписчиков</div>
              <div><span className="font-bold text-gray-900">320</span> подписок</div>
            </div>

            {/* Bio */}
            <div className="text-xs text-gray-700 space-y-1">
              <div className="font-bold text-gray-900">Дмитрий Инякин | KUPETS</div>
              <p className="text-gray-600">💻 Web Development & Interactive Digital Products</p>
              <p className="text-gray-600">🎨 Design, Code & Clean Experience</p>
            </div>
          </div>
        </div>

        {/* Tab Header */}
        <div className="flex justify-center border-b border-gray-200 text-xs font-semibold text-gray-500">
          <div className="flex items-center gap-2 py-2 border-b-2 border-gray-900 text-gray-900 px-4">
            <Grid className="w-4 h-4" />
            <span>ПУБЛИКАЦИИ</span>
          </div>
          <div className="flex items-center gap-2 py-2 text-gray-400 px-4">
            <Bookmark className="w-4 h-4" />
            <span>СОХРАНЕННОЕ</span>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {posts.map((post, index) => (
            <div 
              key={index} 
              className="group relative aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-sm cursor-pointer flex flex-col justify-between p-3 text-white"
            >
              <div className="text-[10px] font-mono text-gray-400 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md self-start">
                {post.tag}
              </div>
              <div className="text-xs font-semibold leading-tight drop-shadow-md">
                {post.title}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white text-xs font-bold">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
