
import PageLayout from "@/components/common/PageLayout";
import JobsHero from "@/components/jobs/JobsHero";
import JobListings from "@/components/jobs/JobListings";
import ApplicationForm from "@/components/jobs/ApplicationForm";
import { Toaster } from "@/components/ui/toaster";

const JobsPage = () => {
  return (
    <PageLayout>
      <JobsHero />
      <JobListings />
      <ApplicationForm />
      <Toaster />
    </PageLayout>
  );
};

export default JobsPage;
