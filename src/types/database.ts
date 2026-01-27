// 데이터베이스 타입 정의
// Supabase에서 생성된 테이블에 맞는 TypeScript 타입

export interface Profile {
    id: string;
    full_name: string | null;
    phone: string | null;
    address: string | null;
    is_admin: boolean;
    created_at: string;
    updated_at: string;
}

export interface Product {
    id: string;
    name: string;
    description: string | null;
    short_description: string | null;
    price: number;
    original_price: number | null;
    category: string | null;
    stock_quantity: number;
    max_quantity: number | null;
    production_days: number;
    is_limited: boolean;
    is_active: boolean;
    maker_note: string | null;
    created_at: string;
    updated_at: string;
}

export interface ProductImage {
    id: string;
    product_id: string;
    image_url: string;
    is_primary: boolean;
    display_order: number;
    created_at: string;
}

export interface ProductionLog {
    id: string;
    product_id: string;
    day_number: number;
    title: string;
    content: string | null;
    media_type: 'image' | 'video' | 'instagram' | 'youtube' | null;
    media_url: string | null;
    progress_percentage: number;
    created_at: string;
    updated_at: string;
}

export interface Order {
    id: string;
    user_id: string | null;
    order_number: string;
    status: 'pending' | 'confirmed' | 'producing' | 'shipping' | 'delivered' | 'cancelled';
    total_amount: number;
    shipping_address: string | null;
    shipping_name: string | null;
    shipping_phone: string | null;
    shipping_memo: string | null;
    tracking_number: string | null;
    certificate_number: string | null;
    created_at: string;
    updated_at: string;
}

export interface OrderItem {
    id: string;
    order_id: string;
    product_id: string | null;
    product_name: string;
    quantity: number;
    price: number;
    custom_options: Record<string, unknown> | null;
    created_at: string;
}

export interface CustomRequest {
    id: string;
    user_id: string | null;
    product_id: string | null;
    options: Record<string, unknown> | null;
    message: string | null;
    estimated_price: number | null;
    status: 'pending' | 'approved' | 'rejected' | 'completed';
    admin_note: string | null;
    created_at: string;
    updated_at: string;
}

export interface AsRecord {
    id: string;
    order_id: string | null;
    user_id: string | null;
    issue_description: string;
    resolution: string | null;
    maker_comment: string | null;
    status: 'requested' | 'in_progress' | 'completed' | 'rejected';
    created_at: string;
    updated_at: string;
}

export interface RestockNotification {
    id: string;
    product_id: string;
    email: string;
    phone: string | null;
    notified: boolean;
    created_at: string;
}

// API 응답 타입
export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
}

// 장바구니 아이템 타입 (클라이언트 전용)
export interface CartItem {
    product: Product;
    quantity: number;
    customOptions?: Record<string, unknown>;
}
