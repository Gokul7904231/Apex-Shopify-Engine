import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, Filter, SlidersHorizontal, ShoppingCart, Star } from 'lucide-react';
import { api } from '../lib/api';
import { useCart } from '../context/CartContext';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'react-hot-toast';

export default function ProductSearch() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        if (response.success) {
          setProducts(response.data);
          setFilteredProducts(response.data);
        } else {
          toast.error(response.error || 'Failed to fetch products');
        }
      } catch (err) {
        toast.error('Network error - check proxy config');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];
    if (searchQuery) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    setFilteredProducts(result);
  }, [searchQuery, sortBy, products]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#111827]">Product Inventory</h1>
          <p className="text-[#6B7280] font-medium mt-1">Search and manage your real Shopify products</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
            <Input 
              placeholder="Search products..." 
              className="pl-10 h-10 border-[#E5E7EB] focus:ring-[#6366F1]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] h-10 border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                <SelectValue placeholder="Sort By" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map(i => <Skeleton key={i} className="h-80 w-full rounded-2xl" />)}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-[#E5E7EB]">
          <div className="bg-[#F3F4F6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <SearchIcon className="w-8 h-8 text-[#9CA3AF]" />
          </div>
          <h3 className="text-lg font-bold text-[#111827]">No products found</h3>
          <p className="text-[#6B7280]">Try adjusting your search or filters</p>
          <Button 
            variant="link" 
            className="mt-2 text-[#6366F1] font-bold"
            onClick={() => setSearchQuery('')}
          >
            Clear all filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <Card key={product.id || i} className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white text-center">
              <div className="aspect-square relative overflow-hidden bg-white border-b border-gray-50 flex items-center justify-center p-6">
                <img 
                  src={product.image || 'https://via.placeholder.com/300x300?text=No+Image'} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Badge className="bg-white/90 backdrop-blur-md text-[#111827] border-none font-bold shadow-sm">
                    ${product.price}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-1 mb-2">
                   {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-[#FBBF24] text-[#FBBF24]" />)}
                   <span className="text-[10px] font-bold text-[#9CA3AF] ml-1">(24 Reviews)</span>
                </div>
                <h3 className="text-sm font-bold text-[#111827] line-clamp-2 leading-relaxed min-h-[2.5rem] group-hover:text-[#6366F1] transition-colors">
                  {product.title}
                </h3>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button 
                  onClick={() => addItem({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image
                  })}
                  className="w-full bg-[#111827] hover:bg-[#6366F1] text-white border-none font-bold transition-all gap-2 py-5 rounded-xl shadow-lg hover:shadow-indigo-500/25"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
