export default function Posts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Заголовок страницы */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Мои посты
          </h1>
          <p className="text-lg text-gray-600">
            Здесь собраны все мои мысли и заметки
          </p>
        </div>

        {/* Контент с Lorem Ipsum */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Добро пожаловать в мой блог!
            </h2>
            
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="text-gray-700 mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              Подзаголовок поста
            </h3>

            <p className="text-gray-700 mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <p className="text-gray-700 mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600 my-6">
              "Это цитата из моего поста. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </blockquote>

            <p className="text-gray-700 mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
              praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
              excepturi sint occaecati cupiditate non provident.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              Еще один раздел
            </h3>

            <p className="text-gray-700 mb-6">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod 
              maxime placeat facere possimus.
            </p>

            <p className="text-gray-700">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
              saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
              Itaque earum rerum hic tenetur a sapiente delectus.
            </p>
          </article>

          {/* Дата публикации */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Опубликовано: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Это демонстрационная страница постов. Скоро здесь появятся реальные записи!
          </p>
        </div>
      </div>
    </div>
  );
}