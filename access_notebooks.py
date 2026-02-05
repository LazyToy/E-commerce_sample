
# -*- coding: utf-8 -*-
import os
import asyncio
from dotenv import load_dotenv
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

# .env 파일에서 환경 변수 로드
load_dotenv()

async def main():
    # 환경 변수에서 토큰 확인
    token = os.getenv("NOTEBOOKLM_SESSION_TOKEN")
    cookie = os.getenv("GOOGLE_AUTH_TOKEN")
    
    if not token and not cookie:
        print("오류: .env 파일에 NOTEBOOKLM_SESSION_TOKEN 또는 GOOGLE_AUTH_TOKEN이 설정되지 않았습니다.")
        print("토큰을 설정한 후 다시 실행해 주세요.")
        return

    # MCP 서버 실행 파라미터 설정 (여기서는 설치된 패키지를 가정)
    # 만약 pip로 설치했다면 'notebooklm-mcp' 명령어를 사용할 수 있어야 합니다.
    # 가상환경 내의 실행 파일을 사용해야 할 수도 있습니다.
    
    server_params = StdioServerParameters(
        command="notebooklm-mcp", # 또는 python -m notebooklm_mcp
        args=[], 
        env=os.environ
    )

    print("NotebookLM MCP 서버에 연결 중...")
    
    try:
        async with stdio_client(server_params) as (read, write):
            async with ClientSession(read, write) as session:
                await session.initialize()
                
                # 도구 목록 확인 (디버깅용)
                # tools = await session.list_tools()
                # print(f"사용 가능한 도구: {[t.name for t in tools.tools]}")
                
                print("노트북 목록을 가져오는 중...")
                
                # list_notebooks 도구 호출
                # 참고: 실제 도구 이름은 서버 구현에 따라 다를 수 있습니다.
                # 보통 'notebooklm_notebook_list' 또는 유사한 이름일 것입니다.
                # 여기서는 list_notebooks를 시도합니다.
                
                result = await session.call_tool("notebooklm_notebook_list", arguments={})
                
                print("\n--- 결과 ---")
                print(result.content[0].text)
                
    except Exception as e:
        print(f"\n오류 발생: {e}")
        print("서버가 설치되어 있는지, 또는 올바른 명령어인지 확인해 주세요.")

if __name__ == "__main__":
    asyncio.run(main())
