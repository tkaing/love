<?php

namespace App\Controller;

use App\Entity\Album;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ManagerController extends AbstractController
{
    private $birthday;

    public function __construct()
    {
        $this->birthday = new \DateTime();
        $this->birthday = $this->birthday->setDate(2019, 8, 25);
    }

    /**
     * @Route("/form/presenter/{presenter}/show/{show}", name="form-presenter-show")
     */
    public function createOrModify(Request $request, int $presenter, int $show)
    {
        $manager = $this->getDoctrine()->getManager();

        $finderAlbum = $this->getDoctrine()->getRepository(Album::class);

        $album = new Album();
        if ($show !== 0) {
            $album = $finderAlbum->find($show);
            if (!$album instanceof Album)
                throw $this->createNotFoundException();
        }
        $clientAlbum = json_decode($request->get('album'));
        $album->setTitle($clientAlbum->title);
        $album->setCreation(new \DateTime($clientAlbum->creation));
        $album->setDescription($clientAlbum->description);
        $album->setPresenter($presenter);
        if ($show === 0)
            $manager->persist($album);
        $manager->flush();

        return new JsonResponse([
            'created' => $show === 0
        ]);
    }

    /**
     * @Route("/form/presenter/{presenter}/show/{id}/remove", name="form-presenter-show-remove")
     */
    public function remove(int $presenter, Album $album)
    {
        $manager = $this->getDoctrine()->getManager();

        $manager->remove($album);
        $manager->flush();

        return new JsonResponse();
    }
}
