/**
 * SkeletonLoaderCard Component
 * データロード中に表示するカードコンポーネント
 */

export const SkeletonLoaderCard: React.FC = () => {
    return (
        <div className="animate-pulse">
            <div className='pl-6 pt-6'>
                <div className='rounded-full bg-gray-400 h-12 w-12'></div>
            </div>
            <div className='flex flex-col items-end mt-10'>
                <div className="w-32 h-4 bg-gray-400"></div>
                <div className="mt-1 w-32 h-4 bg-gray-400"></div>
            </div>
            <div className="mt-4">
                <div className="w-20 h-4 ml-auto bg-gray-400"></div>
            </div>
        </div>
    );
};
