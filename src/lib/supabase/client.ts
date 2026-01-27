// Supabase 브라우저 클라이언트
import { createBrowserClient } from '@supabase/ssr';

/**
 * 브라우저(클라이언트) 환경에서 사용하는 Supabase 클라이언트를 생성합니다.
 * 컴포넌트에서 직접 호출하여 사용합니다.
 */
export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
}
