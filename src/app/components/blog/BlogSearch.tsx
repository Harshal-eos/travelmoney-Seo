import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';

interface BlogSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const BlogSearch: React.FC<BlogSearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative flex-grow">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="search"
        placeholder="Search articles..."
        className="pl-10 rounded-full"
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default BlogSearch;
