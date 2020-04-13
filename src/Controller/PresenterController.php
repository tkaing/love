<?php

namespace App\Controller;

use App\Entity\Album;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PresenterController extends AbstractController
{
    private $birthday;

    public function __construct()
    {
        $this->birthday = new \DateTime();
        $this->birthday = $this->birthday->setDate(2019, 8, 25);
    }

    /**
     * @Route("/presenter/{presenter}/{dir}", name="presenter")
     */
    public function index(int $presenter, int $dir)
    {
        $manager = $this->getDoctrine()->getManager();

        $finderAlbum = $manager->getRepository(Album::class);

        $interval = (new \DateTime())->diff($this->birthday);

        if ($presenter < 0) {
            return $this->redirectToRoute('presenter', ['presenter' => 0, 'dir' => 0]);
        }
        if ($presenter > $interval->y) {
            return $this->redirectToRoute('presenter', ['presenter' => $interval->y, 'dir' => 0]);
        }

        $albums = $finderAlbum->findBy(['presenter' => $presenter], ['creation' => 'ASC']);

        return $this->render('presenter/index.html.twig', [
            'controller_name' => 'PresenterController',
            'presenter' => $presenter, 'dir' => $dir, 'albums' => $albums
        ]);
    }

    /**
     * @Route("/presenter/{presenter}/show/{show}", name="presenter-show")
     */
    public function show(int $presenter, int $show)
    {
        $manager = $this->getDoctrine()->getManager();

        $finderAlbum = $manager->getRepository(Album::class);

        $album = $finderAlbum->find($show);

        if (!$album instanceof Album)
            $album = new Album();

        return $this->render('presenter/show.html.twig', [
            'controller_name' => 'PresenterController',
            'presenter' => $presenter, 'show' => $show, 'birthday' => $this->birthday,
            'album' => $album
        ]);
    }
}
