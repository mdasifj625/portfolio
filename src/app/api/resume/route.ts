import { NextResponse } from 'next/server';
import portfolioData from '@/data/portfolio.json';

export async function GET() {
  try {
    const resumeUrl = portfolioData.personal.resumeUrl;
    
    if (!resumeUrl) {
      return new NextResponse('Resume URL not found', { status: 404 });
    }

    const response = await fetch(resumeUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch resume: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    
    const safeName = portfolioData.personal.name.split(' ').pop()?.toUpperCase() || 'ASIF';
    const safeRole = portfolioData.personal.role.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${safeName}_${safeRole}_RESUME.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error downloading resume:', error);
    return new NextResponse('Error downloading resume', { status: 500 });
  }
}
