"use client";

import React from 'react';

const ProductsPage = () => {
  
  const products = [
    {
      id: 1,
      title: "Luxury Sofa Set",
      subtitle: "ITALIAN LEATHER COLLECTION",
      price: "$2,499",
      category: "FURNITURE",
      material: "Italian Leather",
      description: "Handcrafted luxury sofa set with premium Italian leather upholstery. Features elegant design with superior comfort and durability.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 124,
      availability: "In Stock",
      deliveryTime: "3-5 days",
      colors: ["#3a3a3a", "#c19a6b", "#654321"]
    },
    {
      id: 2,
      title: "Modern Dining Table",
      subtitle: "SOLID WOOD DESIGN",
      price: "$1,299",
      category: "FURNITURE",
      material: "Oak Wood",
      description: "Contemporary dining table crafted from solid oak wood. Perfect for modern homes with its minimalist yet sophisticated design.",
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=600&fit=crop",
      rating: 4.6,
      reviews: 89,
      availability: "In Stock",
      deliveryTime: "2-4 days",
      colors: ["#d2b48c", "#8b4513", "#f5deb3"]
    },
    {
      id: 3,
      title: "Crystal Chandelier",
      subtitle: "BOHEMIAN CRYSTAL",
      price: "$899",
      category: "LIGHTING",
      material: "Crystal Glass",
      description: "Exquisite crystal chandelier with bohemian design. Creates stunning light patterns and adds elegance to any space.",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 56,
      availability: "Limited Stock",
      deliveryTime: "5-7 days",
      colors: ["#ffffff", "#f0f0f0"]
    },
    {
      id: 4,
      title: "Velvet Armchair",
      subtitle: "CLASSIC COMFORT",
      price: "$699",
      category: "FURNITURE",
      material: "Velvet Fabric",
      description: "Luxurious velvet armchair with classic design. Provides exceptional comfort while maintaining an elegant appearance.",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 112,
      availability: "In Stock",
      deliveryTime: "3-5 days",
      colors: ["#800020", "#000000", "#003366"]
    },
    {
      id: 6,
      title: "Persian Rug",
      subtitle: "HAND-WOVEN HERITAGE",
      price: "$1,599",
      category: "DECOR",
      material: "Wool & Silk",
      description: "Authentic hand-woven Persian rug with intricate patterns. Made from premium wool and silk for lasting beauty and comfort.",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 203,
      availability: "In Stock",
      deliveryTime: "4-6 days",
      colors: ["#8b0000", "#556b2f", "#483d8b"]
    },
    {
      id: 7,
      title: "Wall Art Collection",
      subtitle: "ABSTRACT MODERN",
      price: "$299",
      category: "ART",
      material: "Canvas Print",
      description: "Contemporary abstract wall art collection. Set of three canvas prints that create a cohesive modern aesthetic.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      rating: 4.4,
      reviews: 42,
      availability: "In Stock",
      deliveryTime: "2-3 days",
      colors: ["#000000", "#ffffff", "#ff0000"]
    },
    {
      id: 9,
      title: "Ceramic Vase Set",
      subtitle: "HANDCRAFTED POTTERY",
      price: "$199",
      category: "DECOR",
      material: "Ceramic",
      description: "Beautiful set of handcrafted ceramic vases in various sizes. Perfect for displaying flowers or as standalone decorative pieces.",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=600&fit=crop",
      rating: 4.6,
      reviews: 91,
      availability: "In Stock",
      deliveryTime: "2-4 days",
      colors: ["#a0522d", "#d2691e", "#f4a460"]
    },
    {
      id: 10,
      title: "Bookshelf Unit",
      subtitle: "INDUSTRIAL DESIGN",
      price: "$799",
      category: "FURNITURE",
      material: "Metal & Wood",
      description: "Industrial-style bookshelf unit combining metal framework with wooden shelves. Spacious storage with modern aesthetic.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 85,
      availability: "In Stock",
      deliveryTime: "5-7 days",
      colors: ["#36454f", "#654321", "#000000"]
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '64px 16px'
    },
    pageTitle: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#2c3e50',
      marginBottom: '48px',
      letterSpacing: '-0.02em',
      textAlign: 'center'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px'
    },
    productCard: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      minHeight: '560px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    },
    imageSection: {
      position: 'relative',
      overflow: 'hidden',
      height: '250px',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    productImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    contentSection: {
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1
    },
    productTitle: {
      fontWeight: 700,
      fontSize: '1.5rem',
      color: '#2c3e50',
      marginBottom: '8px',
      letterSpacing: '-0.02em',
      lineHeight: 1.2
    },
    productSubtitle: {
      fontSize: '0.9rem',
      color: '#7f8c8d',
      fontWeight: 400,
      marginBottom: '16px',
      letterSpacing: '0.02em'
    },
    divider: {
      height: '1px',
      backgroundColor: '#e1e5e9',
      margin: '16px 0',
      border: 'none'
    },
    priceTag: {
      fontSize: '1.4rem',
      fontWeight: 700,
      color: '#e74c3c',
      marginBottom: '16px'
    },
    infoBox: {
      marginBottom: '16px'
    },
    infoLabel: {
      fontSize: '0.8rem',
      fontWeight: 600,
      color: '#34495e',
      marginBottom: '4px',
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    },
    infoValue: {
      fontSize: '1rem',
      color: '#2c3e50',
      fontWeight: 500,
      marginBottom: '8px'
    },
    chip: {
      background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
      color: 'white',
      fontWeight: 600,
      fontSize: '0.7rem',
      padding: '4px 12px',
      borderRadius: '12px',
      display: 'inline-block',
      marginBottom: '8px',
      height: '24px',
      lineHeight: '16px'
    },
    availabilityChip: {
      background: '#2ecc71',
      color: 'white',
      fontWeight: 600,
      fontSize: '0.7rem',
      padding: '4px 12px',
      borderRadius: '12px',
      display: 'inline-block',
      marginLeft: '8px'
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px'
    },
    star: {
      color: '#f1c40f',
      marginRight: '4px'
    },
    reviewCount: {
      fontSize: '0.8rem',
      color: '#7f8c8d',
      marginLeft: '8px'
    },
    colorOptions: {
      display: 'flex',
      gap: '8px',
      marginTop: '8px'
    },
    colorCircle: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: '1px solid #ddd',
      cursor: 'pointer'
    },
    overviewText: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      color: '#5a6c7d',
      marginBottom: '16px',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    actionButton: {
      background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
      color: 'white',
      fontWeight: 600,
      borderRadius: '12px',
      padding: '12px 16px',
      textTransform: 'none',
      marginTop: '16px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '0.9rem',
      width: '100%'
    }
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} style={styles.star}>★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" style={styles.star}>½</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} style={{...styles.star, color: '#ddd'}}>★</span>);
    }
    
    return stars;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Our Products</h1>
      
      <div style={styles.grid}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={styles.productCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.15)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.1)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
          >
            <div style={styles.imageSection}>
              <img
                src={product.image}
                alt={product.title}
                style={styles.productImage}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjhmOWZhIi8+CjxwYXRoIGQ9Ik0xNTAgNzVoMTAwdjUwSDE1MHoiIGZpbGw9IiNlMWU1ZTkiLz4KPHBhdGggZD0iTTE3NSA5MGwyNSAxNSAyNS0xNXoiIGZpbGw9IiNhMWE5YjgiLz4KPGNpcmNsZSBjeD0iMTY1IiBjeT0iODUiIHI9IjUiIGZpbGw9IiNhMWE5YjgiLz4KPHR5cGUgeD0iMjAwIiB5PSIxMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2ODcyODAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+UHJvZHVjdCBJbWFnZTwvdGV4dD4KPC9zdmc+Cg==';
                }}
              />
            </div>

            <div style={styles.contentSection}>
              <div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <h3 style={styles.productTitle}>
                    {product.title}
                  </h3>
                  <span style={{
                    ...styles.availabilityChip,
                    background: product.availability === "In Stock" ? '#2ecc71' : 
                               product.availability === "Limited Stock" ? '#f39c12' : '#e74c3c'
                  }}>
                    {product.availability}
                  </span>
                </div>
                <h4 style={styles.productSubtitle}>
                  {product.subtitle}
                </h4>

                <div style={styles.ratingContainer}>
                  {renderStars(product.rating)}
                  <span style={styles.reviewCount}>({product.reviews})</span>
                </div>

                <hr style={styles.divider} />

                <div style={styles.priceTag}>
                  {product.price}
                  <span style={{fontSize: '0.9rem', color: '#7f8c8d', marginLeft: '8px'}}>
                    Delivery: {product.deliveryTime}
                  </span>
                </div>

                <div style={styles.infoBox}>
                  <div style={styles.infoLabel}>Category</div>
                  <span style={styles.chip}>{product.category}</span>
                </div>

                <div style={styles.infoBox}>
                  <div style={styles.infoLabel}>Material</div>
                  <div style={styles.infoValue}>{product.material}</div>
                </div>

                <div style={styles.infoBox}>
                  <div style={styles.infoLabel}>Color Options</div>
                  <div style={styles.colorOptions}>
                    {product.colors.map((color, index) => (
                      <div 
                        key={index} 
                        style={{
                          ...styles.colorCircle, 
                          backgroundColor: color,
                          border: color === '#ffffff' ? '1px solid #ddd' : 'none'
                        }} 
                        title={`Color option ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div style={styles.overviewText}>
                  {product.description}
                </div>
              </div>

              <button 
                style={styles.actionButton}
                onClick={() => console.log(`View details for ${product.title}`)}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;