import React from 'react';

export interface Product {
  id: string;
  title: string;
  vendor: string;
  productType: string;
  price: number;
  compareAtPrice?: number | null;
  inventory: number;
  tags?: string[];
  image?: string;
}

const productEmojis: Record<string, string> = {
  Electronics: '🔌',
  'Home & Office': '🏠',
  Wearables: '⌚',
  Accessories: '🎒',
  Software: '💿',
  Gaming: '🎮',
  'Smart Home': '🏡',
};

/**
 * Production-ready Product Card.
 * Uses CSS classes from App.css and implements defensive rendering.
 */
export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // Defensive fallbacks (Step 6)
  const title = (product?.title ?? 'Untitled Product').slice(0, 30);
  const vendor = product?.vendor ?? 'Unknown';
  const type = product?.productType ?? 'General';
  const price = product?.price ?? 0;
  const inventory = product?.inventory ?? 0;
  const tags = product?.tags ?? [];
  const id = product?.id ?? Math.random().toString();

  const getStockClass = (count: number) => {
    if (count > 100) return 'stock-high';
    if (count > 20) return 'stock-medium';
    return 'stock-low';
  };

  return (
    <div key={id} className="product-card animate-fade-in">
      <div className="product-image">
        {product.image ? (
          <img src={product.image} alt={title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
        ) : (
          <span>{productEmojis[type] || '📦'}</span>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-title" title={product.title}>{title}</h3>
        <div className="product-vendor">{vendor} · {type}</div>
        
        <div className="product-meta">
          <div className="product-price">
            ${price.toLocaleString()}
            {product.compareAtPrice && <span className="compare-at">${product.compareAtPrice}</span>}
          </div>
          <span className={`product-stock ${getStockClass(inventory)}`}>
            {inventory} in stock
          </span>
        </div>
        
        <div className="tag-list">
          {tags.slice(0, 3).map((tag, i) => (
            <span key={`${tag}-${i}`} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
