import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

function App() {
  return (
    <div>
      <Header name="My Blog" />
      <main>
        <About />
        <ArticleList />
      </main>
    </div>
  );
}

export default App;