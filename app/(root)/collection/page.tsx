import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import Filter from '@/components/shared/Filter';
import { QuestionFilters } from '@/constants/filters';
import NoResult from '@/components/shared/NoResult';
import QuestionCard from '@/components/cards/QuestionCard';
import { getSavedQuestions } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs';
import { SearchParamsProps } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collections | Dev Overflow',
};

export default async function Home({ searchParams }: SearchParamsProps) {
  const { userId } = auth();

  if (!userId) return null;

  const result = await getSavedQuestions({
    clerkId: userId,
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/collection"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for question"
          otherClasses="flex-1"
        />

        <Filter
          filters={QuestionFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.question.length > 0 ? (
          result.question.map((question: any) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question saved to show"
            description="Be the first break the silience! Ask a Question and kickstart the
          discussion. Our query could be the next bigh thing others learn from.
          Get involved!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
