const { createClient } = require('@libsql/client');

const client = createClient({
  url: 'libsql://pdf-scan-fast-young-nate.aws-eu-west-1.turso.io',
  authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzQ4NzMyOTQsImlkIjoiMDE5ZDNlYjAtNzIwMS03OTY0LTlmNDItYzI5NDM4Y2EyOWMwIiwicmlkIjoiNmUzMjA3Y2ItZTk1ZC00NzRhLTgyOGUtZDA4N2QxMzg3NjdiIn0.hvVb-CmPIREoiZVpSUBZs8uhYb1IZbF17oTG9fKnFk2WJQzNJUR0VH5av2gTSYv3QBXCDI8zSnd5aEyJNRcsDw'
});

// All articles reference data
const articles = [
  { id: 1,  slug: 'how-to-scan-documents-with-phone-2026',           title: 'How to Scan Documents with Your Phone in 2026' },
  { id: 2,  slug: 'e-signatures-vs-wet-signatures-legal-validity-2026', title: 'E-Signatures vs Wet Signatures: Legal Validity in 2026' },
  { id: 3,  slug: 'organize-digital-documents-tips',                  title: 'Top 10 Tips to Organize Digital Documents Like a Pro' },
  { id: 4,  slug: 'best-pdf-scanner-apps-iphone-android-2026',        title: 'Best PDF Scanner Apps for iPhone and Android in 2026' },
  { id: 5,  slug: 'how-to-sign-pdf-on-phone-without-printing',        title: 'How to Sign a PDF on Your Phone Without Printing' },
  { id: 6,  slug: 'ocr-technology-explained-how-phone-reads-text',    title: 'OCR Technology Explained: How Your Phone Reads Text' },
  { id: 7,  slug: 'go-paperless-at-home-save-money',                  title: '5 Ways to Go Paperless at Home and Save Money' },
  { id: 8,  slug: 'how-to-scan-receipts-tax-season-2026',             title: 'How to Scan Receipts for Tax Season 2026' },
  { id: 9,  slug: 'document-security-mobile-guide',                   title: 'The Ultimate Guide to Document Security on Mobile' },
  { id: 10, slug: 'freelancer-mobile-document-scanner',               title: 'Why Every Freelancer Needs a Mobile Document Scanner' },
  { id: 11, slug: 'how-to-name-scanned-pdf-files',                    title: 'How to Name Scanned PDF Files So You Can Find Anything in Seconds' },
  { id: 12, slug: 'scan-multiple-pages-into-one-pdf',                 title: 'How to Scan Multi-Page Documents to One PDF on iPhone & Android' },
  { id: 13, slug: 'students-guide-scanning-notes-textbooks',          title: "The Student's Complete Guide to Scanning Notes and Textbooks with Your Phone" },
];

// Related article map: for each article ID, pick 2-3 related article IDs based on topic similarity
const relatedMap = {
  1:  [4, 12, 6],   // scanning with phone → best scanner apps, multi-page PDF, OCR tech
  2:  [5, 9, 10],   // e-sig vs wet sig → sign PDF on phone, doc security, freelancer
  3:  [11, 7, 8],   // organize docs → naming files, go paperless, scan receipts
  4:  [1, 12, 6],   // best scanner apps → scan docs with phone, multi-page, OCR
  5:  [2, 9, 10],   // sign PDF on phone → e-sig legal, doc security, freelancer
  6:  [1, 4, 12],   // OCR explained → scan docs, best apps, multi-page
  7:  [3, 8, 11],   // go paperless → organize docs, scan receipts, name files
  8:  [10, 3, 11],  // scan receipts → freelancer, organize docs, name files
  9:  [2, 5, 10],   // doc security → e-sig, sign PDF, freelancer
  10: [8, 5, 2],    // freelancer → scan receipts, sign PDF, e-sig
  11: [3, 7, 8],    // name PDF files → organize docs, go paperless, scan receipts
  12: [1, 4, 13],   // multi-page PDF → scan docs, best apps, students guide
  13: [12, 6, 3],   // students guide → multi-page PDF, OCR, organize docs
};

function buildRelatedSection(articleId) {
  const relatedIds = relatedMap[articleId];
  const lines = ['\n\n---\n\n### Related Reading'];
  for (const relId of relatedIds) {
    const article = articles.find(a => a.id === relId);
    lines.push(`- [${article.title}](/en/blog/${article.slug})`);
  }
  return lines.join('\n');
}

async function main() {
  console.log('Fetching current content from database...');
  const result = await client.execute('SELECT id, slug, content FROM blog_posts ORDER BY id');

  for (const row of result.rows) {
    const id = row.id;
    const slug = row.slug;
    let content = row.content;

    // Skip if already has Related Reading section
    if (content.includes('### Related Reading')) {
      console.log(`  [SKIP] Article ${id} (${slug}) already has Related Reading`);
      continue;
    }

    const relatedSection = buildRelatedSection(id);
    const updatedContent = content + relatedSection;

    await client.execute({
      sql: 'UPDATE blog_posts SET content = ? WHERE id = ?',
      args: [updatedContent, id],
    });

    console.log(`  [OK] Updated article ${id}: ${slug}`);
  }

  console.log('\nDone! All articles updated with Related Reading sections.');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
