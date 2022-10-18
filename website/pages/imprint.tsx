import { Layout } from '@layouts/index';

export default function ImprintPage() {
  const sectionClasses = 'first-line:font-semibold text-white block m-2';
  const titleClasses = sectionClasses + ' mb-4 text-2xl';

  return (
    <Layout.Default seo={{ title: 'daniel.heene.io ─ imprint' }}>
      <div className='flex flex-grow min-h-screen pt-16 pb-12'>
        <div className='flex-grow flex flex-col justify-center max-w-md sm: max-w-2xl w-full mx-auto px-0 sm: px-12'>
          <article className='relative flex flex-col space-x-3 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-sm px-2 py-3 border-2 border-gray-600 rounded-lg'>
            <h1 className={titleClasses}>Imprint</h1>
            <address className={sectionClasses}>
              Daniel Heene
              <br />
              Von-Sparr-Str. 62
              <br />
              51063 Cologne
              <br />
              Germany
            </address>
            <div className={sectionClasses}>
              Contact:
              <br />
              call: +49 221 22206571
              <br />
              mail: website@heene.io
            </div>
            <div className={sectionClasses}>
              VAT ID:
              <br />
              DE348610586
            </div>
          </article>
        </div>
      </div>
    </Layout.Default>
  );
}
